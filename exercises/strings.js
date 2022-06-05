
//Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
function puntoA(){
    var cadena = "Dinosaurio";
    console.log(cadena.toUpperCase());
}

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
function puntoB(){
    var cadena = "Dinosaurio";
    var subcadena = cadena.substring(0,5);
    console.log(subcadena);
}

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
function puntoC(){
    var cadena = "Dinosaurio";
    var subcadena = cadena.substring(cadena.length-3,cadena.length);
    console.log(subcadena);
}

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
function puntoD(){
    var cadena = "DinoSaurio";
    var subcadena = cadena.substring(0,1).toUpperCase() + cadena.substring(1,cadena.length).toLowerCase();
    console.log(subcadena);
}

//Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
function puntoE(){
    var cadena = "Dino saurio";
    var posicion = cadena.indexOf(" ");
    console.log(posicion);
}

//Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
function puntoF(){
    var cadena = "Dino saurio";
    var posicion = cadena.indexOf(" ");
    var subcadena1 = cadena.substring(0,posicion).substring(0,1).toUpperCase()+cadena.substring(1,posicion).toLowerCase();
    var subcadena2 = cadena.substring(posicion+1,posicion+2).toUpperCase()+cadena.substring(posicion+2,cadena.length).toLowerCase();
    var subcadena = subcadena1 + " " + subcadena2;
    console.log(subcadena);
}