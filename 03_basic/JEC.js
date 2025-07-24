// javascript Execution context




//  {} -> Global Execution context(this)
// Function Execution context

 //( Eval Execution context)

let val1 = 10
let val2 = 5
function addnum(num1,num2){
  let c = num1 + num2
  return c
} 
let res1 = addnum(val1,val2)
let res2 = addnum(7,5)


