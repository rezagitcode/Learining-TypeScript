// let greetings:string = "Assalamualikum Reza";
// console.log(greetings);
// //number
// let userId:number = 342323;
// //boolean
// let isLoggedIn:boolean = true;
// //any, it's a problem in typescript
// //let teacher;
// let teacher:string;
// //function
function addTwo(num) {
    return num + 2;
}
function checkPerson(name, email = "te.sf@sfs.sf", isTall) {
    console.log(name + "," + email + "," + isTall);
}
;
checkPerson("1", undefined, true);
let loginUser = (email, password, isLoggedIn = false) => { };
loginUser("sdf", "sfsd");
// This could happen sometimes:
// let giveMoreThanTen = (num:number):number =>{
//     if(num>10){
//         return num;
//     }
//     return "less";
// }
let fruits = ["apple", "banana", "orange"];
fruits.map(item => { return `fruit is ${item}`; });
export {};
