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
let epicPhrase2 = `${hello} ${world}`;