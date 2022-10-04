// JAN 1st 1970 is time 0

//ENTER YOUR BIRTH DAY AND TIME
let datetime1 = new Date("10/22/1998 3:28 am"); //current time

//WASTE TIME DOING SOME BUSY WORK (counting to 100 million) ~3000ms
for(i=0;i<1000000;i++){
    const text = "i=" + i;
}

let datetime2 = new Date(); //current time after work is done

console.log(datetime1.toLocaleString())
console.log(datetime2.toLocaleString())

console.log(datetime1.getTime())
console.log(datetime2.getTime())
console.log("DIFF")
console.log(datetime2.getTime() - datetime1.getTime())