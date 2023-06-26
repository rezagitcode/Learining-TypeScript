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
// function addTwo(num:number){
//     return num + 2;
// }
function checkPerson(name:string, email:string = "te.sf@sfs.sf", isTall:boolean){
    console.log(name,email,isTall);
};
checkPerson("1",undefined,true);
export{}