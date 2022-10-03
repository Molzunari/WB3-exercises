// GET FEDERAL TAX - PAGE 22 EXERCISE 3 SECTION 1-17

/*
create a function that acepts gross pay *end*
*/

function getFederalTax(grossPay, withholdingCode){
    if(0 == withholdingCode){
        return grossPay * 0.23;
    }else if( 1 == withholdingCode){
        return grossPay * 0.21;
    }else if(2 == withholdingCode){
        return grossPay * 0.195;
    }else if(3 == withholdingCode){
        return grossPay * 0.185;
    }else if(withholdingCode >= 4){
        let over = withholdingCode - 4;
        let extra = 0.005 * over;
        let rate = (0.18 - extra);
        console.log("RATE: " + rate);
        return grossPay * rate;
    }else{
        console.log("Invalid Paramter for withholdingCode");
    }
}

console.log("P1 " + getFederalTax(750, 0)); //PERSON 1
console.log("P2 " + getFederalTax(1550, 2)); //PERSON 2
console.log("P3 " + getFederalTax(1100, 6)); //PERSON 3