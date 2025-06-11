import java.util.Scanner;
public class CreditCardValidator {
        public static void main(String[] args) {
                Scanner keyboardInput = new Scanner(System.in);

                System.out.println("Hello, Kindly Enter Card details to verify: ");
                String cardDetails = keyboardInput.next();
              
                String cardType = CreditCardValidatorFunction.creditCardType(cardDetails);
                
                System.out.println("*************************************");
                System.out.println("**Credit Card Type: "+ cardType);
                System.out.println("**Credit Card Number: "+ cardDetails);

                int cardLength = CreditCardValidatorFunction.cardLength(cardDetails);
                System.out.println("**Credit Card Digit Length: "+ cardLength);

                String cardStatus = cardValidity(cardDetails);
                System.out.println("**Credit Card Validity Status: "+ cardStatus);

                System.out.println("*************************************");


        }
}