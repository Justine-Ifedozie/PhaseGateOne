import java.util.ArrayList;
import java.util.Scanner;
import java.time.LocalDateTime;

public class CheckOutApp {
        public static void main (String[] args) {
        Scanner keyboardInput = new Scanner(System.in);

ArrayList <String> items = new ArrayList <String>();
ArrayList <Integer> quantity = new ArrayList <Integer>();
ArrayList <Double> pricee = new ArrayList <Double>();

boolean menu = true;
while (menu) {

                System.out.println("What is the customer's Name? ");
                String customerName = keyboardInput.nextLine();

                boolean subMenu = true;
                while (subMenu) {

                System.out.println("What did the user buy? ");
                String userPurchase = keyboardInput.nextLine();
                items.add(userPurchase);

                System.out.println("How many pieces? ");
                String pieces1 = keyboardInput.nextLine();
                int pieces = Integer.parseInt(pieces1);
              quantity.add(pieces);

                System.out.println("How much per unit? ");
                String pricePerUnit1 = keyboardInput.next();
                double pricePerUnit = Double.parseDouble(pricePerUnit1);
                pricee.add(pricePerUnit);

                System.out.println("Add more Items? ");
                String addMoreItems = keyboardInput.nextLine();
                addMoreItems = keyboardInput.nextLine();

                if (addMoreItems.equalsIgnoreCase("yes")) subMenu = true;

                else if (addMoreItems.equalsIgnoreCase("no")) subMenu = false;
                }
        
        System.out.println("What is your name? ");
        String cashierName = keyboardInput.nextLine();

        System.out.println("How much discount will he get? ");
        String discount1 = keyboardInput.nextLine();
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
        System.out.println("===========================================================================");
        System.out.println("ITEM                QTY                PRICE                TOTAL(NGN) ");
        System.out.println("-------------------------------------------------------------------------");
        
        for (int count = 0; count < items.size(); count++) {
                System.out.println(items.get(count) + "\t" + "\t    " + quantity.get(count) + "\t" + "\t    ₦" + pricee.get(count));
                System.out.println();
                }


        System.out.println();
        System.out.println("-------------------------------------------------------------------------");
        System.out.println("Sub Total: ");
        System.out.println("Discount ");
        System.out.println("VAT @ ");
        System.out.println("===========================================================================");
        System.out.println("Bill Total: ");
        System.out.println("===========================================================================");
        System.out.println("THIS IS NOT A RECEIPT, KINDLY PAY 5803.50");
        System.out.println("===========================================================================");


        System.out.print("Enter -1 to quit app or any other number to process another transaction: ");
        int sentinel = keyboardInput.nextInt();
        if (sentinel == -1) menu = false;
                }
        System.out.print("Shutting Down CheckOut software!");
        }
}