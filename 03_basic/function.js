

// function sayMyName(){
//   console.log("A");
//   console.log("M");
//   console.log("I");
//   console.log("T"); 
// }

// sayMyName()  // calling function


// function addtwonumber(number1, number2){
//  console.log( number1 + number2);
// }
// addtwonumber(3, 6)
// addtwonumber(4, 8)



// function addtwonumber(number1, number2){
//  let result = number1 + number2
//  return result
// //  console.log("amit"); // after return we can't print anything
// }
// const result = addtwonumber(5,6)
// console.log("Result: ", result);



// function addtwonumber(number1, number2){
//   return number1 + number2
// }
// const result = addtwonumber(5,6)
// console.log("Result: ", result);




// function LoginUserMessage(username){
//   if(!username){  // we can write if(username === undefined) also
//     console.log("please enter a username");
//     return
//   }
//   return `${username} just logged in`
// }

// console.log(LoginUserMessage());





// function LoginUserMessage(username = "amit"){
//   if(!username){  // we can write if(username === undefined) also
//     console.log("please enter a username");
//     return
//   }
//   return `${username} just logged in`
// }

// console.log(LoginUserMessage("Raj")); // overwrite value amit 






// shopping cart

// function calculatecartprice(number1){
//   return number1
// }
// console.log(calculatecartprice(200,500));  // it print only first value


function calculatecartprice(...number1){ // rest operator or spread operator
  return number1
}
// console.log(calculatecartprice(200,500,900,896,345));  // it  gives an array



//object
const user = {
  username : "amit",
  prices: 299
}
function handleobject(annyobject){
  console.log(`Username is ${annyobject.username} and price is ${annyobject.prices}`);
  
}
// handleobject(user)
handleobject({username: "av", prices:
  799
})


//array

const mynewarray = [200,500,800]

function retunsecondvalue(getarray){
  return getarray[1]
}

// console.log(retunsecondvalue(mynewarray));
console.log(retunsecondvalue([300,788,9765]));
