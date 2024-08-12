#= 
Run a transient simulation for 30 years forced by uniform CFC11 concentration. 
Model assumes saturation at the sea surface, this can probably be modified quite easily.

Data Input
  4° TMI grid

Run instructions
(c) Surface forcing is in "bc" variable - change how this is defined to simulate
    surface warming or cooling or non-uniform behavior
(d) Gif output will be saved to "plots" dir 
=#
using Pkg
Pkg.activate("./scripts")
Pkg.instantiate()

using Revise, TMI, Interpolations, CairoMakie
using LinearAlgebra,OrdinaryDiffEq, 
PreallocationTools, Sundials, NaNStatistics, NCDatasets
using TMItransient

TMIversion = "modern_90x45x33_GH10_GH12"
@time A, Alu, γ, TMIfile, L, B = config_from_nc(TMIversion)

ds = NCDataset(datadir("Tracer_atmospheric_histories_revised_2023.nc"),"r")

tsfc = ds["time"][180:210]
bcsfc = ds["CFC11_NH"][180:210]

nt = length(tsfc)
bc = zeros(nt, size(γ.wet)[1], size(γ.wet)[2], size(γ.wet)[3])
for i in 1:nt
    bc[i, :, :,1] .= bcsfc[i]
end

#load boundary condition data
dsfc = bc[begin,:, :, 1][γ.wet[:,:,1]] #this is a dirichlet boundary condition, but should be a Robin boundary condition. 

#make u0 vector 
u0vec = Alu\bc[begin, :, :, :][γ.wet]
c0 = tracerinit(u0vec, γ.I, γ.wet)
u0 = c0[γ.wet]

#solve using CVODE_BDF alg - tested against other alg and works fastest
#Solver will print out what time step it is on

println("Solving ODE")
func,p, tspan = setupODE_nojac(γ, u0, tsfc, dsfc,bc,L,B,nt)
prob = ODEProblem(func, u0, tspan, p)
solver = CVODE_BDF(linear_solver=:GMRES)

tol = 1e-3
@time sol = solve(prob,solver,abstol=tol,reltol=tol,saveat=tsfc, tstops = tsfc)
println("ODE solved")

s = s_array(sol, γ)
stime = [nanmean(s[i, :, :, 1][γ.wet[:,:,1]]) for i ∈ 1:length(tsfc)]

f = Figure(backgroundcolor = RGBf(0.98, 0.98, 0.98),resolution = (1000, 700));

ga = f[1,1] = GridLayout()
gbcd = f[2,1] = GridLayout()

levels = nanminimum(s):0.05:nanmaximum(s)+0.05
ax1, p1 = plot(ga[1,1], tsfc[begin:1], stime[begin:1])
ax1.xlabel = "Time [y]"
ax1.ylabel = "Avg Surface CFC11 Concentration [ppt]"
tmin, tmax = extrema(tsfc)
cmin, cmax = extrema(bcsfc)

xlims!(ax1, tmin, tmax)
ylims!(ax1, cmin, cmax)

ax1.title = "Time = 0"
depths = [2, 10, 20] 
ax2, c2 = heatmap(gbcd[1,1], γ.lon, γ.lat, s[1, :,:,depths[1]]) 
ax3, c3 = heatmap(gbcd[1,2], γ.lon, γ.lat, s[1, :, :, depths[2]])
ax4, c4 = heatmap(gbcd[1,3], γ.lon, γ.lat, s[1, :, :, depths[3]])
Colorbar(gbcd[1,4], c4)
ax2.title =  "Depth = "* string(γ.depth[depths[1]])
ax3.title =  "Depth = "* string(γ.depth[depths[2]])
ax4.title =  "Depth = "* string(γ.depth[depths[3]])
iterator = 2:length(tsfc)
record(f, plotsdir("CFC11.mp4"), iterator; framerate = 1) do d
    plot!(ga[1,1], tsfc[begin:d], stime[begin:d])
    c2[3] = s[d,:, :, depths[1]]
    c3[3] = s[d,:, :, depths[2]]
    c4[3] = s[d,:, :, depths[3]]
    ax1.title = "Time = " * string(d)
end
