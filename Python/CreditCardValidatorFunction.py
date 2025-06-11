def creditCardType(cardNum):
        cardName = " "
        firstDigit = cardNum[0]
        secondDigit = cardNum[1]
                
        if len(cardNum) <= 16 and len(cardNum) >= 13:
                if firstDigit == 4:
                        cardName = "Visa Cards"
                elif firstDigit == 5:
                        cardName = "MasterCard"
                elif firstDigit == 6:
                        cardName = "Discover Cards"
                elif firstDigit == 3 and secondDigit == 7:
                        cardName = "American ExpressCards"
                else:
                        cardName = "Invalid-Card"

        else:
                cardName = "Invalid Card"

        return cardName


def cardLength(String cardNum):
        length = len(cardNum)
        return length


def cardValidity(cardNum):
        sum = 0, add = 0, total = 0
        validity = " "
        for values in range(len(cardNum) -1, -1, -2):
                digits = cardNum.charAt(count)
                int digits = Character.getNumericValue(characterss);
                int firstResult = digits * 2;
                int secondResult;
                
                if (firstResult >= 10) {
                        secondResult = (firstResult / 10) + (firstResult % 10);
                }
                else{
                secondResult = firstResult;
                }
                sum += secondResult;
        }
        
        for(int count = 0; count < cardNum.length() -1; count += 2) {
               char characterss = cardNum.charAt(count);
                int digits = Character.getNumericValue(characterss);
                add += digits;
        }
        total = sum + add;
        if (total % 10 == 0) validity = "Valid";

        else if (total % 10 != 0) validity = "Invalid";

        return validity;
