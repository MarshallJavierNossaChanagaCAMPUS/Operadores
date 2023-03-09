//Operadores Aritmeticos (libreria matematica)

//Operador random, devuelve un float pseudo.aleatorio en el rango de 0 a 1 incluido el 0 pero no el 1

alert(Math.random());

//este rango puede ser ampliado e incluso escoger dos valores determinados

function random(min, max) {
    resultado = Math.random() * (7 - 2) + 2;
    alert(resultado);
}

random();