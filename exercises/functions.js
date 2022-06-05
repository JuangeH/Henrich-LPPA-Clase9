//Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
function punto6A(num1, num2) {
    var resultado = num1 + num2;
    console.log(resultado);
}

//A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
function punto6B(num1, num2){
    if(isNaN(num1) == true || isNaN(num2) == true){
        alert("Uno de los parámetros ingresados presenta un error");
        return NaN;
    }else{
        var resultado = num1 + num2;
        console.log(resultado);
    }
}

//Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
function punto6C(num){
    if(Number.isInteger(num) == true){  
        return true;    
    }else{
        return false;      
    }
}

//A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
function punto6D(num1, num2){
    if(isNaN(num1) == true || isNaN(num2) == true){
        alert("Uno de los parámetros ingresados presenta un error");
        return NaN;
    }else{
        if(Number.isInteger(num1) == true && Number.isInteger(num2) == true){
            var resultado = num1 + num2;
            console.log(resultado);
        }else{
            alert("Uno de los parámetros ingresados no es un número entero");
            return parseInt(num1 + num2);
        }
    }
}

//Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
function punto6E(num1, num2){
   return punto6D(num1, num2);
}