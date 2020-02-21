//import
const { crearArchivo, listarTabla } = require('./Logica_multiplicar/multiplicarLogica');
const {comando, argv} = require('./config_yargs/yargs');

let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
console.log(argv.limit);

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limit).then(archivo => console.log('Archivo creado: ' + archivo)).catch(err => console.log(err));;
        break;

    case 'listar':
        listarTabla(argv.base, argv.limit).then(lista => console.log('Listado de la tabla' + lista)).catch(err => console.log(err));
        break;


    default:
        console.log('No se reonoce el comando ingresado');
        break;
}
