//Imports
const fs = require('fs');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        for (let i = 1; i <= limite; i++) {
            //data += (base + ' x ' + i + ' = ' + base * i + '\n');
            console.log(base + ' x ' + i + ' = ' + base * i + '\n');
        }
    })
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject('El valor de la Base no es un número')
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += (base + ' x ' + i + ' = ' + base * i + '\n');
        }

        //console.log(base);

        fs.writeFile('./tablas/Tabla del ' + base + '.txt', data, err => {
            if (err) reject(err)
            else resolve('Tabla Del ' + base + '.txt')
        });

    })
}

//export
module.exports = {
    crearArchivo,
    listarTabla,
}