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

// Async - await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('Hello World'), 3000): reject(new Error('Test Error'))

    })
}

const helloAsync = async() => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

const anotherFunction = async() => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();