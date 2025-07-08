const marvel_heros = ["thor", "spider-man", "iron man", "hulk"]
const DC_heros = ["batman", "superman", "wonder woman", "flash"]

// marvel_heros.push(DC_heros) // this will merge the arrays inside array
// console.log(marvel_heros)
// console.log(marvel_heros[4][0])

// const all_heros = marvel_heros.concat(DC_heros) // this will merge the arrays and return a new array
// console.log(all_heros);

const all_new_heros = [...marvel_heros,...DC_heros] // this will merge the arrays and return a new array  
// it is a modern and more efficient way to merge arrays and it is also called spread operator it is work like concat in array

// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,9,[8,4,7],9,0]

const real_array = another_array.flat() // this will convert nested arrays into a single array
console.log(real_array);


console.log(Array.isArray("amit")) // it will return true if the given value is an array otherwise false
console.log(Array.from("amit")) // from keyword will convert a string into an array
console.log(Array.from({name: "amit"})) // it will return an empty array 


let score1 = 80
let score2 = 90
let score3 = 75
console.log(Array.of(score1, score2, score3)) // it will create a new array with the given values;

// isArray.isArray() is a built-in function in JavaScript that checks if a value is an array. It returns true if the given value is an array, and false otherwise.

// from() is a built-in function in JavaScript that creates a new array from an existing array-like object or an iterable object. It returns a new array with the elements of the existing array.

// of() is a built-in function in JavaScript that creates a new array with the given values. It returns a new array with the elements of the given values.






