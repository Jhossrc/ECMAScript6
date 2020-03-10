// Parametros por defecto

function newFunction(name, age, country) {
    var name = name || 'Jose';
    var age = age || 21;
    var country = country || 'PE';

    console.log(name, age, country);
}

//es6

function newFunction2(name = 'Jose', age = 21, country = 'PE') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', '23', 'CO')

// Concatenación

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
// es6
let epicPhrase2 = `${hello} ${world}`;


// Mutilinea

let lorem = "Aprendiendo ECMAScript con el profesor Oscar en Platzi. Es un excelente curso YEAH \n" + "Tomaré más cursos de este profesor."

//es6
let lorem2 = `El curso de Git en Platzi es muy increíble, todos deberían tomarlo.
El profesor Freddy explica muy bien.`;

console.log(lorem);
console.log(lorem2);


// Desestructuración

let person = {
    'name': 'Jose',
    'age': 21,
    'country': 'PE'
}

console.log(person.name, person.age);

//es6

let { name, age } = person;

console.log(name, age);

// Operador de propagación (Spead operator)

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

// var - let - const

{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);
// console.log(globalLet);

const a = 'b';
console.log(a);
// a = 'a';
console.log(a);

// Creación de objetos


let name = 'Jose';
let age = 21;
// es5
obj = { name: name, age: age };
// es6
obj2 = { name, age };
console.log(obj2);

// Funciones de flecha

const names = [
    { name: 'Jose', age: 21 },
    { name: 'Raul', age: 20 },
]

let listOfNames = names.map(function(item) {
    console.log(item.name);
})

let listOfNames2 = names.map(({ name }) => console.log(name));

/* const listOfNames3 = (name, age, country) => {
    //...
} */

/* const listOfNames4 = name => {
    //...
}; */

const square = num => num * num;

// PROMESAS

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('HEY!');
        } else {
            reject('UPS!!');
        }
    });
}

helloPromise()
    .then(console.log)
    .then(() => console.log('Funciona'))
    .catch(error => console.log(error))

// CLASES 

class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();

console.log(calc.sum(2, 2));

// Modulos

import hi from './module';

console.log(hi());