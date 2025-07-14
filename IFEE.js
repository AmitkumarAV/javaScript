// Immediately Invoked Function Expressions(IIFE)

(function amit(){
  console.log('DB Connected');
})();// this is IIFE function it is used to remove the pollution from global scope .pollution in global scope it create a  problem


( function code()  { // named IFEE
  console.log('DB COnnected two');
  
})();

 // when we have to write two IFEE in same program just end each Ifee with semi colon
( (name) => { // unnamed IFEE
  console.log(`DB three ${name}`);
}) ('amit')


