
 // scope 


 //let c = 300 // global scope
 let a = 300
if(true){     // block scope
  let a = 10
  const b = 20
 // var c = 30
//  console.log("Inner: ", a); // block scope
}

// console.log(a); // when i try to print a and b it through error because of scope 
// console.log(b);
// console.log(c);


// nested scope

function one(){
  const username = "amit"

  function two(){
    const website = "youtube"
    //console.log(username);
    
  }
  //console.log(website);

   two()
  
}
 //one()



 if (true){
  const username = "amit"
  if (username === "amit"){
    const website = " youtube"
   // console.log(username + website);
    
  }
  //console.log(website);
}
  // console.log(username);



  //       interesting    /////////////////
  console.log(addone(5))
    function addone (num){
    return num + 1

  }


  //alternate

  const addtwo =  function(num){
    return num + 2

  }
 console.log(addtwo(5)) 