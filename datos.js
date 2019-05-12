const opciones = {
    matematicas:{
        default:0,
        alias: 'm'
    },
    ingles:{
        default:0,
        alias: 'i'
    },
    programacion:{
        demand: true,
        alias: 'p'
    }
}

let obtenerPromedio = () => ((argv.m + argv.i + argv.p) / 3);

const argv = require('yargs')
    .command('promedio','Calcuar el promedio', opciones)
    .argv;

module.exports = {
    obtenerPromedio,
    argv
};
