const solver = require("javascript-lp-solver");

const model = {
    optimize: "costo",  // Lo que se quiere optimizar
    opType: "min",      // tipo
    constraints: {      // Restricciones
        // Lit de donde están las restricciones en mi excel

        // OFERTA de las plantas
        planta1: {max: 600},
        planta2: {max: 1050},
        planta3: {max: 950},
        planta4: {max: 300},

        // DEMANDA de los almacenes
        almacen1: {equal: 450},
        almacen2: {equal: 800},
        almacen3: {equal: 1050},
        almacen4: {equal: 300},
        almacen5: {equal: 200},
    },
    variables: { // Variables de decisión
        // Planta 1 a almacenes
        p1_gua: { costo: 20, planta1: 1, almacen1: 1 },
        p1_mon: { costo: 12, planta1: 1, almacen2: 1 },
        p1_jal: { costo: 21, planta1: 1, almacen3: 1 },
        p1_diu: { costo: 7, planta1: 1, almacen4: 1 },
        p1_man: { costo: 9, planta1: 1, almacen5: 1 },
        // Planta 2 a almacenes
        p2_gua: { costo: 15, planta2: 1, almacen1: 1 },
        p2_mon: { costo: 16, planta2: 1, almacen2: 1 },
        p2_jal: { costo: 23, planta2: 1, almacen3: 1 },
        p2_diu: { costo: 5, planta2: 1, almacen4: 1 },
        p2_man: { costo: 12, planta2: 1, almacen5: 1 },
        // Planta 3 a almacenes
        p3_gua: { costo: 8, planta3: 1, almacen1: 1 },
        p3_mon: { costo: 17, planta3: 1, almacen2: 1 },
        p3_jal: { costo: 28, planta3: 1, almacen3: 1 },
        p3_diu: { costo: 9, planta3: 1, almacen4: 1 },
        p3_man: { costo: 15, planta3: 1, almacen5: 1 },
        // Planta 4 a almacenes
        p4_gua: { costo: 4, planta4: 1, almacen1: 1 },
        p4_mon: { costo: 20, planta4: 1, almacen2: 1 },
        p4_jal: { costo: 19, planta4: 1, almacen3: 1 },
        p4_diu: { costo: 10, planta4: 1, almacen4: 1 },
        p4_man: { costo: 10, planta4: 1, almacen5: 1 },
    }
}

console.log(solver.Solve(model));