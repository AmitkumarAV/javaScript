// for of 


const arr = [1,2,3,4,5]

for (const num of arr) {
  // console.log(num);
}




const greetings = "Hello World"
for (const greet of greetings) {
  // console.log(`Each char is ${greet}`); 
}





// maps
 
const map = new Map() // map is an object it holds key value pair and remember the original insertion order of the keys and it hold unique value
map.set('IND', "India")
map.set('USA',"united state of america")
map.set('Iran', "Iran")
map.set('IND', "India")
// console.log(map);

for (const [key, value] of map) {
  // console.log(key, ':-',value);
  
}




// const myObject = { // object can't be iteratable
//   'game1': 'FF',
//   'game2':'PUBG'
// }

// for (const [key,value] of myObject) {
//   console.log(key, ':-',value);
  
// }








const myObject = {
  js: 'javascript',
  cpp: 'C++',
  rb: "ruby",
  swift: "swift by apple"
}

//forin loop

for (const key in myObject) {
  // console.log(`${key} shortcut is for ${myObject[key]}`);

}



const programming = ['js','ruby','java','c']
for (const key in programming) {
  console.log(programming[key]);
  
}
