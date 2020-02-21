const { crearArchivo, listarTabla } = require('../Logica_multiplicar/multiplicarLogica');

const options = {
    base: {
        demand: true,
        alias: 'b',
    },
    limit: {
        alias: 'L',
        demand: true,
        default: 14,
    }
}
const argv = require('yargs')
.command('listar', 'Imprime la tabla de multiplicar', options)
.command('crear', 'crea un archivo con la tabla segun límite y base', options).help().argv;



let comando = argv._[0];

module.exports = {
    argv,
    comando,
}
