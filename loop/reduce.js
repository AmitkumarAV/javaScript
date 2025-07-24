// const mynum = [1,2,3]

// const total = mynum.reduce(function (acc, curr_val){
//   console.log(`acc: ${acc} and curval: ${curr_val}`);
  
//   return acc + curr_val
// }, 0)







//arrow function
// const mynum = [1,2,3]
// const mytotal = mynum.reduce((acc, curr) => acc+curr, 0)
// console.log(mytotal);




const shopping_cart = [
  {
    itemname: "js_course",
    price :999
  },
  {
    itemname: "python",
    price :1999
  },
  {
    itemname: "mad",
    price :9999
  },
  {
    itemname: "ds",
    price :8099
  },
]

const total = shopping_cart.reduce((acc,item) => acc + item.price, 0)
console.log(total);
