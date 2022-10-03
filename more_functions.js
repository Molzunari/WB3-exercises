// 1-12 Exercise #1
function displayMailingLabel(name, address, city, state, zip){
    console.log(name);
    console.log(address);
    console.log(city);
    console.log(state);
    console.log(zip);
}

let name1 = "Chad";
let address1 = "1154 woah rd";
let city1 = "Clark"
let state1 = "Georgia"
let zip1 = "20919"












// absolute number is the positive version even if it's negative

console.log(123)
console.log(-123)

console.log(Math.abs(123))
console.log(Math.abs(-123))// always positive - never negative, (inverts makes opposite if negative)

// 1-12 Exercise #3
function displayReceipt(totalDue, amountPaid){
    console.log("TOTAL DUE: $" + totalDue);
    console.log("AMOUNT PAID: $" + amountPaid);
    if(amountPaid < totalDue){
        let owed = (totalDue - amountPaid);
        console.log("OWED: $" + owed);
    }else{
        let credit = Math.abs(totalDue - amountPaid); //NEVER NEGATIVE
        console.log("CREDIT BALANCE: $" + credit);    
    }
}

displayReceipt(100, 120)