// console.log("hello world");
const name = "amit"
const repocount = 20

//console.log(name + repocount + "value");
console.log(`hello my name is ${name} and my repo count is ${repocount}`);//modern way to define and here we can add method with variable

const gameName = new String("resident evil");
// console.log(gameName);
// console.log(gameName.toUpperCase());
// console.log(gameName[0]);
// console.log(gameName._proto_);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherstring = gameName.slice(-6, 4)
console.log(anotherstring);


const newStringone = " amit  "
console.log(newStringone);
console.log(newStringone.trim());
console.log("\n");

const url = "https://www.github.com/amit%2045"
console.log(url.replace('%20', '-'));
console.log(url.includes('amit'));
console.log(url.includes('av'));

console.log(gameName.split('-'));
