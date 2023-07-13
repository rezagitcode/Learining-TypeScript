//tsc.cmd --target es6 --module es6 myEnums.ts
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 11] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 12] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
const rzSeat = SeatChoice.AISLE;
