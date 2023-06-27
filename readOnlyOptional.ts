//READONLY and optional

//readonly is like const but more strict.
type User = {
    readonly _id:string;
    name:string;
    email:string;
    isActive:boolean;
    creditCardNo?:number; //----> ? is optional symbol
}
const myUser:User = {
    _id:"3434",
    name:"r",
    email:"r@r.com",
    isActive:false
}
myUser.email = "e@3.com";
// myUser._id = "2334"; gives error.

type CardNum = {
    cardNumber:string;
}
type CardDate = {
    cardDate:string;
}
type CardDetails = CardNum & CardDate & {
    cvv:number;
}
let rezCard:CardDetails = {
    cardNumber:"234",
    cardDate:"12-11-1234",
    cvv:111111111111
}
// Arrays:
let fruits:string[] = [];
fruits.push("IlikeApple");

let vegies:Array<string> = ["tomato","radish","potato"];

type cUser = {
    name:string;
    isActive:boolean;
}
const allCusers:cUser[] = [];
allCusers.push({name:"Raaj",isActive:false});
allCusers.push({name:"Kaju",isActive:true});
console.log(allCusers);

//tsc.cmd --target es6 --module es6 readOnlyOptional.ts
export{}