import java.util.Scanner;
import java.time.LocalDateTime;
public class CheckOutApp {
        public static void main (String[] args) {
        Scanner keyboardInput = new Scanner(System.in);

boolean menu = true;
while (menu) {

                System.out.println("What is the customer's Name? ");
                String customerName = keyboardInput.next();

                boolean subMenu = true;
                while (subMenu) {

                System.out.println("What did the user buy? ");
                String userPurchase = keyboardInput.next();

                System.out.println("How many pieces? ");
                String pieces1 = keyboardInput.next();
                int pieces = Integer.parseInt(pieces1);

                System.out.println("How much per unit? ");
                String pricePerUnit1 = keyboardInput.next();
                int pricePerUnit = Integer.parseInt(pricePerUnit1);

                System.out.println("Add more Items? ");
                String addMoreItems = keyboardInput.next();

                if (addMoreItems.equalsIgnoreCase("yes")) subMenu = true;

                else if (addMoreItems.equalsIgnoreCase("no")) subMenu = false;
                }
        
        System.out.println("What is your name? ");
        String cashierName = keyboardInput.next();

        System.out.println("How much discount will he get? ");
        String discount1 = keyboardInput.next();
        int discount = Integer.parseInt(discount1);

        String mainMenu = """
JUSTINE STORES
MAIN BRANCH
LOCATION: 312, HERBERT MACAULAY WAY, SABO YABA, LAGOS.
TEL: 09021887133
                """;
        System.out.println(mainMenu);

        LocalDateTime dateTime = LocalDateTime.now();
        System.out.println(dateTime);
        System.out.println("Cashier: " + cashierName);
        System.out.println("Customer Name : " + customerName);
        System.out.print("========================================");
        System.out.print("ITEM                QTY                PRICE                TOTAL(NGN) ");
        System.out.print("---------------------------------------------------------------------");
        System.out.print();



        System.out.println();
        System.out.print("---------------------------------------------------------------------");
        System.out.print("Sub Total: ");
        System.out.print("Discount ");
        System.out.print("VAT @ ");
        System.out.print("========================================");
        System.out.print("Bill Total: ");
        System.out.print("========================================");
        System.out.print("THIS IS NOT A RECEIPT, KINDLY PAY 5803.50");
        System.out.print("========================================");


        System.out.print("Enter -1 to quit app or any other number to process another transaction: ");
        int sentinel = keyboardInput.nextInt();
        if (sentinel == -1) menu = false;
                }
        }
}