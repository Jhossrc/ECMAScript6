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

// finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        if (true) {

            setTimeout(() => {
                resolve('Hello World');
            }, 3000);

        } else {
            reject(new Error('Test Error'));
        }
    })
}

helloWorld()
    .then(console.log)
    .catch(console.log)
    .finally(() => console.log('Finalizó'))

// regex - match

const regexData = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);