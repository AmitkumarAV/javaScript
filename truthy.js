// const userEmail = "amit@gmail.com"
// //const userEmail = ""

// if(userEmail){
//   console.log("got user email");
// }else{
//   console.log("don't have");
  
// }

// falsy values

// false ,0 , -0, BigInt 0n, "" ,null , undefined, NaN

// truthy values

// "0", 'false', " ",[],{}, function(){}

// const userEmail = [3,5]
// if (userEmail.length === 0){
//   console.log("array is empty");
// }else{
//   console.log("Arrray");
  
// }


// const emptyobj = {}
// if (Object.keys(emptyobj).length === 0){
//   console.log("object is empty");
  
// }






// Nullish Coalescing operator (??) : Null , Undefined
let val1;
val1 = 5 ?? 10
console.log(val1);

val2 = null ?? 10
console.log(val2);

val3 = undefined ?? 40
console.log(val3);

val4 = null ?? 10 ?? 20
console.log(val4);




// terniary operator 

// condition ? true : false


const coldcoffee = 200
coldcoffee <= 70 ? console.log("less than 80") : console.log("more than 80");
