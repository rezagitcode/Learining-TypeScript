// const User = {
//     name:"Reza",
//     email:"reza@email.com",
//     isActive:true
// }
// function createUser({name:string, isPaid:boolean}){}
// createUser({name:"reza", isPaid:true})

// function createCourse():{}{
//     return {}
// }
// //bad behaviors

// // createUser({name:"reza",isPaid:false,email:"r@r.com"}) gives error
// //but
// let myObject = {name:"reza",isPaid:false,email:"r@r.com"}
// createUser(myObject); //works fine

//Type Aliases
type bool = boolean;
let isTaken:bool = false;
console.log(isTaken);
type myUser = {
    name:string;
    email:string;
}
const user:myUser = {name:"rex", email:"rx@r.com"}
console.log(user);
//tsc.cmd --target es6 --module es6 myObjects.ts
export {}