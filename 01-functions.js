
// Ciudadanos de primera clase

const greet = function (name) {
    console.log('Hola', name)
}

greet('Alex')

function processGreting(greetFunction, name) {
    greetFunction(name)
}

function returnGreeting() {
    return greet
}

processGreting(greet, 'Jose')

const great2 = returnGreeting()
great2('Nombre raro')

// Arrow functions avansadas

// Retorno implicito
const multiply = (a,b) => a*b
console.log(multiply(1,4))

// This lexico

const handler = {
    name: 'Luna',
    greeting: function () {
        console.log('Hola', this.name)
    },
    arrowGreeting: () => {
        console.log('Hola', this.name)
    }
}

handler.greeting()
handler.arrowGreeting();

// IIFE (Expresion de Funcion Invocada Inmediatamente)

// IIFE Clasico
(function() {
    console.log('IIFE Clasico')
})();

(() => {
    console.log('IIFE Arrow Function')
})();

// Parametros rest (...)

function sum(...numbers) {
    let result = 0
    for (let number of numbers) {
        result += number
    }
    return result
}

function classOne(...students) {
    console.log(students)
}

console.log(sum(1,2,3,4,5,6,7,8,9,0))
console.log(sum(10,15))
classOne('Alex', 'Luna', 'Juan David')

// Operador Spread (...)

const numbersToSpreadOperator = [1,2,3]

function sumWithSpread(a,b,c) {
    return a + b + c
}

console.log(sumWithSpread(1,2,3))
console.log(sumWithSpread(...numbersToSpreadOperator))
