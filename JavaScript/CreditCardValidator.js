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
















cardDetails = prompt("Hello, Kindly Enter Card details to verify: ");
              
const cardType = creditCardType(cardDetails);
                
console.log("***************************************");
console.log("**Credit Card Type: "+ cardType);
console.log("**Credit Card Number: "+ cardDetails);

//let cardLength = cardLength(cardDetails);
console.log("**Credit Card Digit Length: "+ cardLength);

//let cardStatus = cardValidity(cardDetails);
console.log("**Credit Card Validity Status: "+ cardStatus);

console.log("***************************************");


