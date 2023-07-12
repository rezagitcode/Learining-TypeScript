// Arrays:
const myArray:(string | number | boolean)[] = ["rz",true,3,3,"df",45]; //does not follow string order
// Tuples:
// const myTuple:[string,number,boolean] = ['rz',true,3];gives error
// const myTuple:[string,number,boolean] = ['rz',3,false]; does not give error
// type User = [number,string]
// let myNum:User = [22,"df"];
// myNum[0]=23; allowed which is bad
// myNum.push(34); allowed which is also bad
export{}