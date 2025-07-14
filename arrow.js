const user = {
  username: "Amit",
  price: 1000,

  welcomeMessage: function(){
    console.log(`${this.username} , welcome to this page`); // this keyword is used to refer the current context
    console.log(this);
    
    
  }

}

// user.welcomeMessage()
// user.username= "AV" // i changed here current contex
// user.welcomeMessage()

// console.log(this); // here we are in node environment so this refer to empty object



// function amit(){
//   let username = "Amit"
//   console.log(this.username);
  
// }
// amit()



// const amit = function (){
//   let username = "Amit"
//   console.log(this.username);
  
// }
// amit()





// const amit = () =>{
//   let username = "Amit"
//   console.log(this);
// }
// amit()






// arrow function

// const addtwo = (num1,num2) => {
//   return num1+num2  // explicit return
// }
// console.log(addtwo(4,8))



// const addtwo = (num1,num2) => num1 + num2 // implicit return function in this function no use of parentheses  
// // if we rap in curly braces we have to write return keyword or we wrap in parentesis no need to write return
// console.log(addtwo(4,8))


// const addthree = (num1,num2) => (num1 + num2)  // implict return 
// console.log(addthree(7,9));



// return object 
const addthree = (num1,num2) => ({username:"amit"}) // while return object we have to wrap in parenthesis
console.log(addthree(7,9));



