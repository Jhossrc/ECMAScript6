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