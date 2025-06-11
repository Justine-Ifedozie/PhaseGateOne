def creditCardType(cardNum):
        cardName = " "
        firstDigit = int(cardNum[0])
        secondDigit = int(cardNum[1])
                
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


def cardLength(cardNum):
        length = len(cardNum)
        return length


def cardValidity(cardNum):
        sum = 0
        add = 0
        total = 0
        validity = " "
        for values in range(len(cardNum) -2, -1, -2):
                digits = int(cardNum[values])
                firstResult = digits * 2
                secondResult = 0
                
                if firstResult >= 10: 
                        secondResult = (firstResult / 10) + (firstResult % 10);
                else:
                        secondResult = firstResult

                sum += secondResult;

        for number in range(len(cardNum) -1, -1, 2):
                digits = int(cardNum[number])
                add += digits

        total = sum + add
        if total % 10 == 0:
                validity = "Valid"

        elif (total % 10 != 0):
                validity = "Invalid";

        return validity
