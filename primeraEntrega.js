// Deberán realizar los siguientes ejercicios:

// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function puntoUno(num) {
    const respuesta = 
    isNaN(num) ? "Insertar numero":
    num % 2 === 0 ? `${num} es par` :
    `${num} es impar`;

    console.log(respuesta);

} 

function puntoDos(num1,num2) {
    const respuesta	= 
    isNaN(num1) ? "Insertar numero":
    isNaN(num2) ? "Insertar numero":
    num1 > num2 ? `${num1} es mayor a ${num2}` :
    num1 < num2 ? `${num2} es mayor a ${num1}` :
    "Son iguales";

    console.log(respuesta)
}   

function puntoTres(num) {
    const respuesta = 
    isNaN(num) ? "Insertar numero" :
    num % 5 === 0 ? `${num} es multiplo de 5`:
    "No es multiplo de 5"

    console.log(respuesta);

} 

function puntoCuatro(num) {
    for (let i = 0; i <= num; i++) {
        console.log(i)
    }
}

function puntoCinco(num,palabra){
    Array.from({length: num}, () => console.log(palabra))
}

function puntoSeis(valores){
    valores.forEach(valor => console.log(valor));
}

function puntoSiete(array){
    array.forEach((valor,i) => {
        if(i != 4){
            console.log(valor)
        }
    })
}

function puntoOcho(array,multi){
    array.forEach(num => {
        const resultado = num * multi;
        console.log(resultado);
    })
}

