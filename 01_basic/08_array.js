const myarr = [1, 2, 3, 4, 5]
// console.log(myarr[0]); // 1

// myarr[0] = 10;
// console.log(myarr); // 10

// Array methods

// myarr.push(6);
// myarr.unshift(9);
// myarr.shift();
// console.log(myarr); // [10, 2, 3, 4, 5, 6]

// myarr.pop();
// console.log(myarr.includes(4)); // true
// console.log(myarr.indexOf(4)); // 3


// const newarr = myarr.join()
// console.log(myarr); // 10,2,3,4,5,6
// console.log(typeof newarr); // string

console.log("A",myarr);

const myarr2 = myarr.slice(1, 4);
console.log(myarr2); // [2, 3, 4]
console.log(myarr2);


const myarr3 = myarr.splice(1, 3);
console.log("B", myarr); // [1,5]

