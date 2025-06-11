import java.util.Scanner;
public class CreditCardValidator {
        public static void main(String[] args) {
                Scanner keyboardInput = new Scanner(System.in);

                System.out.println("Hello, Kindly Enter Card details to verify: ");
                String cardDetails = keyboardInput.next();
              int cardNumber = Integer.parseInt(cardDetails);

                String cardType = CreditCardValidatorFunction.creditCardType(cardDetails);
                System.out.print(cardType);











        }
}