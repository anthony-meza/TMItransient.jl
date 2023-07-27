var documenterSearchIndex = {"docs":
[{"location":"#","page":"Home","title":"Home","text":"CurrentModule = TMItransient","category":"page"},{"location":"#TMItransient-1","page":"Home","title":"TMItransient","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Documentation for TMItransient.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Modules = [TMItransient]","category":"page"},{"location":"#TMItransient.EvolvingField","page":"Home","title":"TMItransient.EvolvingField","text":"struct EvolvingField\n\nThis structure permits the grid to be \nautomatically passed to functions with\nthe evolving tracer field.\n\nThis structure assumes the Tracer type to be \nthree-dimensional with an additional vector dimension for time.\n\ntracer::Vector{Array{T,3}}\nγ::Grid\nname::Symbol\nlongname::String\nunits::String\n\n\n\n\n\n","category":"type"},{"location":"#TMItransient.agedistribution-Tuple{Any}","page":"Home","title":"TMItransient.agedistribution","text":"function agedistribution\n\nage distribution refers to distribution over lags, not space\nsometimes called a transit time distribution\n\n\n\n\n\n","category":"method"},{"location":"#TMItransient.ces_ncwrite-NTuple{4, Any}","page":"Home","title":"TMItransient.ces_ncwrite","text":"function ces_ncwrite(γ,time,sol_array)\nWrite .nc file output for commonerasim.jl\n\nArguments\n\nγ: \ntime: vector of time values \nsol_array: solution array in form time x lat x lon x depth - must match γ + time \n\nOutput\n\nsaves .nc file titled \"ces_output.nc\" in data array \n\n\n\n\n\n","category":"method"},{"location":"#TMItransient.deltaresponse-Tuple{Any, Any}","page":"Home","title":"TMItransient.deltaresponse","text":"function deltaresponse\n\nTake CDF and turn it into PDF\n\n\n\n\n\n","category":"method"},{"location":"#TMItransient.globalmean_impulseresponse-NTuple{6, Any}","page":"Home","title":"TMItransient.globalmean_impulseresponse","text":"function globalmean_impulseresponse\n\nḠ: satisfied ∫₀^∞ Ḡ(τ) dτ = 1\n\n`alg`: centered or leapfrog\n\nDoes leapfrog satisfy normalization?\n\n\n\n\n\n","category":"method"},{"location":"#TMItransient.read_stepresponse-Tuple{}","page":"Home","title":"TMItransient.read_stepresponse","text":"function read_stepresponse()\n\nread previously computed MATLAB output using shell script\n\nWarning: hard-coded file names from a 4° x 4° TMI run\n\n\n\n\n\n","category":"method"},{"location":"#TMItransient.readopt-Tuple{Any, Any}","page":"Home","title":"TMItransient.readopt","text":" read surface layer\n\n\n\n\n\n","category":"method"},{"location":"#TMItransient.s_array-Tuple{Any, Any}","page":"Home","title":"TMItransient.s_array","text":"function  s_array(sol, γ)\nConverts from DE.jl output to time x lat x lon x depth\n\n\n\n\n\n","category":"method"},{"location":"#TMItransient.setupODE_nojac-NTuple{8, Any}","page":"Home","title":"TMItransient.setupODE_nojac","text":"function setupODE(γ, u0,tsfc, dsfc,bc,L, t_int)\nSetup ODEFunction for LC+Bf with no Jacobian\n\n\n\n\n\n","category":"method"},{"location":"#TMItransient.stability_check-Tuple{Any, Any}","page":"Home","title":"TMItransient.stability_check","text":"stability_check(sol_array, Csfc) \nchecks stability of ODE output\n\nArguments\n\nsol_array: solution array \nCsfc: boundary condition \n\nOutput\n\nprints true or false \n\n\n\n\n\n","category":"method"},{"location":"#TMItransient.taudeltaresponse-Tuple{}","page":"Home","title":"TMItransient.taudeltaresponse","text":"function taudeltaresponse\n\nTake CDF and turn it into PDF, get lag timescale\n\nSeems inefficient, reading file for time lag alone\n\n\n\n\n\n","category":"method"},{"location":"#TMItransient.varying!-NTuple{4, Any}","page":"Home","title":"TMItransient.varying!","text":"function varying!(du, u, p, t)\nODE function for varying boundary cond\nSets up dc/dt = L*C + B*f to be solved\n\nArguments\n\ndu: dc/dt (must have this name for DifferentialEquations.jl to work\nu: C, what we are solving for \np: parameters for diffeq - must hold specified vars  \nt: time we are solving for (automatically determined by DE.jl)\n\nOutput\n\ndu: numerical value of LC+Bf, vector of size 74064 for 4°\n\n\n\n\n\n","category":"method"},{"location":"#TMItransient.vintagedistribution-NTuple{4, Any}","page":"Home","title":"TMItransient.vintagedistribution","text":"function vintagedistribution(t₀,tf,Δ,τ,tmodern=2022,interp=\"linear\")\n\npercentage of water in the modern ocean\nfrom a vintage defined by the calendar year interval\nt₀ [cal yr CE] => tf [cal yr CE]\n\nArguments\n\nt₀: Starting calendar year of vintage, e.g., 1450 CE\ntf: final calendar year of vintage, e.g., 1850 CE\nΔ::Vector{Field}: Step function response\nτ = Vector{Float64}: time lags associated with step response\ntmodern=2022: modern calendar year\ninterp=linear: or can be \"spline\"\n\nOutput\n\ng::Field: 3D distribution of vintage contribution\n\nWarning\n\nshould be a way to make Δ argument more general (more types)\n\n\n\n\n\n","category":"method"},{"location":"#TMItransient.goodtime","page":"Home","title":"TMItransient.goodtime","text":"function gooddata\na useful one-liner\n\n\n\n\n\n","category":"function"},{"location":"#TMItransient.stepresponse-Tuple{Any}","page":"Home","title":"TMItransient.stepresponse","text":"function stepresponse(loc)\n\nresponse to a Heaviside function at a `loc`\n\n\n\n\n\n","category":"method"}]
}
