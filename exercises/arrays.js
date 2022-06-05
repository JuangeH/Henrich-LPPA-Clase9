// Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
function punto3A(){
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    console.log(meses[4]);
    console.log(meses[10]);
}

//Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
function punto3B(){
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    console.log(meses.sort());
}

//Agregar un elemento al principio y al final del array (utilizar unshift y push).
function punto3C(){
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    meses.unshift("Inicio");
    meses.push("Fin");
    console.log(meses);
}

//Quitar un elemento del principio y del final del array (utilizar shift y pop).
function punto3D(){
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    meses.shift();
    meses.pop();
    console.log(meses);
}

//Invertir el orden del array (utilizar reverse).
function punto3E(){
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    console.log(meses.reverse());
}

//Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
function punto3F(){
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    console.log(meses.join("-"));
}

//Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
function punto3G(){
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var mesesRecorte = meses.slice(4,11);
    console.log(mesesRecorte);
}