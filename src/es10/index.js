let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat()); // [ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]
console.log(array.flat(2));

/* 
[
  1, 2, 3, 1, 2,
  3, 1, 2, 3
]
*/

let array = [1, 2, 3, 4, 5];

console.log(array.flatMap(value => [value, value * 2]));
// [1,2,  2,4,  3,6,  4,8,  5,10]


let hello = '           hello world';
console.log(hello);

console.log(hello.trimStart());

let hello = 'hello world        ';
console.log(hello);

console.log(hello.trimEnd());

/* 

try {

} catch {
    error
}


*/

let entries = [
    ['name', 'oscar'],
    ['age', 32]
];
console.log(Object.fromEntries(entries));


let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);

console.log(symbol.description);