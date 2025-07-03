//stack memory(primitive type) and heap memory(Non-primitive type)

let myyoutube = "Amit's Youtube";
let anothername = myyoutube;
anothername = "Amit's new Youtube";
console.log(myyoutube); // Amit's Youtube);

console.log(anothername);


let userone = {
  name: "Amit",
  age: 22,
  upi: "amit@another"
}
let usertwo = userone
usertwo.age = 30
console.log(userone.age);
console.log(usertwo.age);

