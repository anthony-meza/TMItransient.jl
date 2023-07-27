var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = TMItransient","category":"page"},{"location":"#TMItransient","page":"Home","title":"TMItransient","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for TMItransient.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [TMItransient]","category":"page"},{"location":"#TMItransient.ces_ncwrite-Tuple{Any, Any, Any}","page":"Home","title":"TMItransient.ces_ncwrite","text":"function ces_ncwrite(γ,time,sol_array)\nWrite .nc file output for commonerasim.jl\n\nArguments\n\nγ: \ntime: vector of time values \nsol_array: solution array in form time x lat x lon x depth - must match γ + time \n\nOutput\n\nsaves .nc file titled \"ces_output.nc\" in data array \n\n\n\n\n\n","category":"method"},{"location":"#TMItransient.varying!-NTuple{4, Any}","page":"Home","title":"TMItransient.varying!","text":"function varying!(du, u, p, t)\nODE function for varying boundary cond\nSets up dc/dt = L*C + B*f to be solved\n\nArguments\n\ndu: dc/dt (must have this name for DifferentialEquations.jl to work\nu: C, what we are solving for \np: parameters for diffeq - must hold specified vars  \nt: time we are solving for (automatically determined by DE.jl)\n\nOutput\n\ndu: numerical value of LC+Bf, vector of size 74064 for 4°\n\n\n\n\n\n","category":"method"}]
}