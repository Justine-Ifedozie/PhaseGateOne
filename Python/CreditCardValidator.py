from CreditCardValidatorFunction import creditCardType, cardLength, cardValidity

cardDetails = input("Hello, Kindly Enter Card details to verify: ")

cardType = creditCardType(cardDetails)
                
print("***************************************")
print("**Credit Card Type: ", cardType)
print("**Credit Card Number: ", cardDetails)

cardLength = cardLength(cardDetails)
print("**Credit Card Digit Length: ", cardLength)

cardStatus = cardValidity(cardDetails)
print("**Credit Card Validity Status: "+ cardStatus)

print("***************************************")

