let marks:number | string; //unions are basically used for adding more types to a variable.
marks = 23;
marks = "34";

type User = {
    name:string;
    id:number;
}
type Admin = {
    username:string;
    id:number;
}
let Reza: User | Admin = {name:"Reza",id:432}
Reza = {username:"Rz",id:234}

function giveId(value:number | string){
    console.log(value);
}
giveId("12");
giveId(87);


//Arrays:
// let data1: string[] | number[] = [1,2,"3"] gives error
// let data1:(string | number)[] = [1,2,"3"] does not give error

// let time:230 = 230; more strict
//tsc.cmd --target es6 --module es6 myUnion.ts

//tuple:

export {}