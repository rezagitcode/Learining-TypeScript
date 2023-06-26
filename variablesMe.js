"use strict";
// let greetings:string = "Assalamualikum Reza";
// console.log(greetings);
Object.defineProperty(exports, "__esModule", { value: true });
// //number
// let userId:number = 342323;
// //boolean
// let isLoggedIn:boolean = true;
// //any, it's a problem in typescript
// //let teacher;
// let teacher:string;
// //function
// function addTwo(num:number){
//     return num + 2;
// }
function checkPerson(name, email, isTall) {
    if (email === void 0) { email = "te.sf@sfs.sf"; }
    console.log(name, email, isTall);
}
;
checkPerson("1", undefined, true);
