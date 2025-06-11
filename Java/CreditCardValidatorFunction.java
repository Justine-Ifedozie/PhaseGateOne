public class CreditCardValidatorFunction {

        public static String creditCardType(String cardNum) {
                String cardName = " ";
                char firstNum = cardNum.charAt(0);
                int firstDigit = Character.getNumericValue(firstNum);

                char secondNum = cardNum.charAt(1);
                int secondDigit = Character.getNumericValue(secondNum); 
                
                if (cardNum.length() <= 16 && cardNum.length() >= 13) {
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

        public static int cardLength(String cardNum){
                int length = cardNum.length();
                return length;
        }

        public static String cardValidity(String cardNum){
                int sum = 0, add = 0, total = 0;
              String validity = " ";
        for(int count = cardNum.length() - 1; count > -1; count-= 2){
                char characterss = cardNum.charAt(count);
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
        }








}