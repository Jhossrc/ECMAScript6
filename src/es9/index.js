const obj = {
    name: 'Jose',
    age: 21,
    country: 'PE'
};

let { name, ...all } = obj;

console.log(name, all);

const obj2 = {
    ...obj,
    country: 'MX'
}

console.log(obj2);