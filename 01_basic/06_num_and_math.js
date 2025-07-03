// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(typeof balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


// const otherNumber = 124.6788
// console.log(otherNumber.toPrecision(3));//focus on first three digits
// console.log(otherNumber.toPrecision(5)); //focus on all five digits
// console.log("\n");


// const hundreds = 100000000000
// console.log(hundreds.toLocaleString('en-IN'));



// +++++++++++++++++++ MATH OPERATIONS +++++++++++++++++++++++


// console.log(Math);
// console.log(Math.abs(-10)); // it converts negative number to positive

// console.log(Math.floor(10.7)); // it rounds down the number
// console.log(Math.ceil(10.7)); // it rounds up the number

// console.log(Math.max(10, 20, 30)); // it finds the maximum number
// console.log(Math.min(10, 20, 30)); // it finds the minimum number

// console.log(Math.random()); // it generates random number between 0 and 1

// console.log(Math.random() * 10); // it generates random number between 0 and 10
// console.log(Math.round(4.6));


// console.log(Math.PI);

// console.log(Math.sqrt(25)); // it finds the square root of a number

// console.log(Math.pow(5, 3)); // it finds the power of a number
// console.log(Math.floor(Math.random() * 10)+1);// add 1 bcz values should b/w 1 and 10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // it generates random number between min and max