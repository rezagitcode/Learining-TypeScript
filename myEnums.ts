//tsc.cmd --target es6 --module es6 myEnums.ts
enum Seatchoice {
    AISLE = 10,
    MIDDLE,
    WINDOW
}
// const enum Seatchoice {
//     AISLE = 10,              -------> for simpler JavaScript.
//     MIDDLE,
//     WINDOW
// }

// const rzeat = Seatchoice.AISLE;
//interfaces -->
interface User {
    readonly dbId:number;
    email: string;
    userId: number;
    googleId?:string;
    // startTrial:() => string;
    startTrial(): string;
    getCoupon(couponname:string):string;
}
const reza:User = {dbId:34,email:"r@r.r", userId:123,
startTrial:()=>{return "trial started"},
getCoupon:(name:"reza")=>{return "give"}
};