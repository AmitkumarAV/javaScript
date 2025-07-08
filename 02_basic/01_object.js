// we can declare object in two ways literal and constructor

// singleton -  object can be created using constructor

// object literals


const mysymbol = Symbol("key1")


const Jsuser = {
  name : "Amit",
  "full name": "Amit Kumar",
  [mysymbol]: "key1",
  age : 22,
  location: "Deoghar",
  email: "kumaramit.nnp@gmail.com",
  isLoggedIn : false,
  lastLoginDays: ["monday","sunday"]
}
// console.log(Jsuser.email);
// console.log(Jsuser["full name"]); // hgere we can't access full name by using . operator
// console.log(Jsuser[mysymbol]);
// console.log(typeof Jsuser[mysymbol]);
// console.log(typeof mysymbol);


// Jsuser.age = 20
// console.log(Jsuser);

// // Object.freeze(Jsuser)
// Jsuser.email = "AmitVerma@gmail.com"
// console.log(Jsuser);



//function

Jsuser.greeting = function(){
  console.log("Hello Js");
  
}
console.log(Jsuser.greeting());


Jsuser.greeting2 = function(){  // string interpulation (using backtick)
  console.log(`Hello Js user, ${this.name}`);
}
console.log(Jsuser.greeting2());





