const {obtenerPromedio, argv} = require ('./datos')

console.log(argv);
console.log('El Promedio es:' + (argv.m+argv.i+argv.p)/3);
//console.log('El Promedio es:' + obtenerPromedio(argv.m+argv.i+argv.p));
