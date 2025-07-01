//  primitive datatypes
//7 types: Number, String, Boolean, Undefined, Null, Symbol (ES6), BigInt

const score = 100
const scorevalue = 100.3

const isloggedIn = false
const outsidetemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

const bigNumber = 235576745743
console.log(bigNumber);
const bigNum = 41436378267234563246345877769576n  // big integer(bigInt)
console.log(bigNum);


// Non Primitive datatypes / reference types
// reference types: Object, Array, Function, Set, Map, Date, RegExp, Error


//arrays
const heros = ['Superman', 'Batman', 'Spiderman']
let myobj = {   //variable
  Name: 'Amit',   //object
  age : 22,
}

const Myfunction= function(){
  console.log('Hello World');
}
console.log(typeof anotherid);
console.log(typeof Myfunction);
console.log(typeof bigNum);
console.log(typeof myobj);
console.log(typeof heros);




