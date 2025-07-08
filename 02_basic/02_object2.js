//const tinderUser = {} //  declaration of object   - non singleton object


const tinderUser = new Object() // declartion of object - singleton object
tinderUser.id = "amit123"
tinderUser.name = "amit"
tinderUser.isLoggedIn = false;

const regularuser = {
  email:"regular@gmail.com",
  fullname:{
    userfullname: {
      firstname: "Amit",
      lastname : "verma"
    }
  }
}
// console.log(regularuser.fullname.userfullname.firstname);
// console.log(tinderUser);


const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}
const obj3 = {5: 'a', 6: 'b'}
// const obj3 = { obj1, obj2}
// const obj4 = Object.assign({},obj1,obj2,obj3) // this is used to merge an object
// {} is a target variable  and obj1 to obj3 is source variable

const obj4 = { ...obj1, ...obj2, ...obj3} // it is spread operation for merging an object
// console.log(obj4);


const users = [
  {
    id: 1,
    email: "amit@gmail.com"
  }
]

console.log(users)
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // it convert object into array after printing
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));



