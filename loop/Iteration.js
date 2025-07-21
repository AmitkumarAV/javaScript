// for loop

// for (let i = 0; i <= 10; i++) {
//   // let element = i;
//    if (i == 5){
//     console.log("5 is best");
    
//    }
//  console.log(i);
  
// }




for (let i = 1; i <= 10; i++) {
 // console.log(`outer loop value: ${i}`);
  
  for (let j = 1; j <= 10; j++) {
    //console.log(`innerloop value ${j} and inner loop ${i}`);

    //console.log(i + '*' + j + '=' + i*j);
    
  }
  
}






// let myarray = ['flash', 'batman','iron man']
// console.log(myarray.length);

// for (let index = 0; index < myarray.length; index++) {
//   const element = myarray[index];
//   console.log(element);
  
  
// }








// break and continue

// for (let index = 0; index <= 20; index++) {
//   if (index == 5){
//     console.log("5 is best");
//     break;
    
//   }
//   console.log(`value of index is ${index}`);
// }







for (let index = 0; index <= 20; index++) {
  if (index == 5){
    console.log("5 is best");
    continue;
    
  }
  console.log(`value of index is ${index}`);
}