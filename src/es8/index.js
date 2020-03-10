// Object.entries

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);

console.log(entries.length);

// Object,values

const data2 = {
    frontend: "Oscar",
    backend: "Isabel",
    design: "Ana"
};

const values = Object.values(data2);
console.log(values);

// Pad

const string = 'hello';
console.log(string.padStart(7, 'fff'));
console.log(string.padEnd(12, '---fsafas--'))