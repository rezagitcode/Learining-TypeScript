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
function addTwo(num:number):number{
    return num + 2;
}
function checkPerson(name:string, email:string = "te.sf@sfs.sf", isTall:boolean){
    console.log(name + "," + email + "," + isTall);
};
checkPerson("1",undefined,true);

let loginUser = (email:string,password:string,isLoggedIn:boolean = false) =>{}
loginUser("sdf","sfsd")

// This could happen sometimes:
// let giveMoreThanTen = (num:number):number =>{
//     if(num>10){
//         return num;
//     }
//     return "less";

// }

let fruits = ["apple","banana","orange"];
// let fruits = [1,2,3];
// fruits.map(item =>{ return `fruit is ${item}`}); // okay
fruits.map((item):string =>{ return `fruit is ${item}`}); //but this is more safe and better

export{}