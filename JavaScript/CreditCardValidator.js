const prompt = require("prompt-sync")();

function creditCardType(cardNum) {
        let cardName = " ";
        let firstDigit = Number(cardNum.charAt(0));

        let secondDigit = Number(cardNum.charAt(1));
                
                if (cardNum.length <= 16 && cardNum.length >= 13) {
                        if (firstDigit == 4) cardName = "Visa Cards";
                        else if (firstDigit == 5) cardName = "MasterCard";
                        else if (firstDigit == 6) cardName = "Discover Cards";
                        else if (firstDigit == 3 && secondDigit == 7) cardName = "American ExpressCards";
                        else{
                                cardName = "Invalid-Card";
                        }
                        }
                else{
                        cardName = "Invalid Card";
                        }
                return cardName; 
        }


function cardLength(cardNum){
        let length = cardNum.length;
        return length;
        }


function cardValidity(cardNum){
        let sum = 0, add = 0, total = 0;
        let validity = " ";
        for(let count = cardNum.length - 1; count > -1; count-= 2){
                  let digits = Number(cardNum.charAt(count));
                let firstResult = digits * 2;
                let secondResult;
                
                if (firstResult >= 10) {
                        secondResult = (firstResult / 10) + (firstResult % 10);
                }
                else{
                secondResult = firstResult;
                }
                sum += secondResult;
        }
        
        for(let count = 0; count < cardNum.length -1; count += 2) {
               let digits = Number(cardNum.charAt(count));
                add += digits;
        }
        total = sum + add;
        if (total % 10 == 0) validity = "Valid";

        else if (total % 10 != 0) validity = "Invalid";

        return validity;
        }

cardDetails = prompt("Hello, Kindly Enter Card details to verify: ");
              
const cardType = creditCardType(cardDetails);
                
console.log("***************************************");
console.log("**Credit Card Type: "+ cardType);
console.log("**Credit Card Number: "+ cardDetails);

let cardLength1 = cardLength(cardDetails);
console.log("**Credit Card Digit Length: "+ cardLength1);

let cardStatus = cardValidity(cardDetails);
console.log("**Credit Card Validity Status: "+ cardStatus);

console.log("***************************************");
