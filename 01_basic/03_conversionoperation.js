let score = "33abc";
console.log(typeof score);
console.log(typeof (score));


let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);





let age = undefined; //null/boolean/string/
console.log(typeof age);

let vInNumber = Number(age);
console.log(typeof vInNumber);
console.log(vInNumber);


//"33" => 33
//"33abc" => NaN
//true => 1; false => 0;
//null => 0; undefined => NaN


let isloggedIn = "amit" // false if is empty string, undefined, null, 0, NaN
let booleanIsloggedIn = Boolean(isloggedIn)
console.log(booleanIsloggedIn);
console.log("\n");


//1 => true; 0 => false;
//"" => false; undefined => false; null => false; 0 => false; NaN => false;
//else => true;
//"amit" => true; any other string => true;

let somenumber = 10;

let stringNumber = String(somenumber);
console.log(stringNumber);
console.log(typeof stringNumber);


// *******************Operations*********************
let value = 3
let negvalue = -value
console.log(negvalue);
console.log("\n");

console.log(2+2);
console.log(2-2);
console.log(2*2);


let str1 = "hello"
let str2 = " world"
let concatString = str1 + " " + str2
console.log(concatString);
let str3 = str1 + str2
console.log(str3);
console.log("\n");
console.log("1"+ 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1"+(2+2))
console.log("\n");
console.log(3 + 2 +"2");

console.log(true);
console.log(+true);
console.log(+"")
console.log("\n");

// let num1, num2,num3
// num1 = num2 = num3 = 10

let gamecounter = 100
gamecounter++
++gamecounter
console.log(gamecounter);






