import java.util.ArrayList;
import java.util.Scanner;
import java.time.LocalDateTime;

public class CheckOutApp {
        public static void main (String[] args) {
        Scanner keyboardInput = new Scanner(System.in);

ArrayList <String> items = new ArrayList <String>();
ArrayList <Integer> quantity = new ArrayList <Integer>();
ArrayList <Double> pricee = new ArrayList <Double>();
ArrayList <Double> total = new ArrayList <Double>();


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

                double toTal = pricePerUnit * pieces;
                total.add(toTal);

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
        double discount = Double.parseDouble(discount1);

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
        System.out.println("ITEM                QTY                PRICE                TOTAL (NGN) ");
        System.out.println("---------------------------------------------------------------------------");
        
        for (int count = 0; count < items.size(); count++) {
                System.out.println(items.get(count) + "\t" + "\t    " + quantity.get(count) + "\t" + "\t      " + pricee.get(count) + "\t" + "\t      " + total.get(count));
                System.out.println();
                }


        System.out.println();
        System.out.println("---------------------------------------------------------------------------");
        
        double sum = 0;
        for (int count = 0; count < total.size(); count++) {
                sum += total.get(count);
        }

        System.out.printf("                        \t \t Sub Total: \t" + "\t %.2f", sum);
        
        double discounT = sum * (discount / 100);
        System.out.printf("\n                        \t \t Discount: \t" + "\t %.2f ", discounT);
        
        double vat = sum * (17.50 / 100);
         System.out.printf("\n                         \t   VAT  @  17.50: \t" + "\t %.2f", vat);
        System.out.println();
        
        System.out.println("===========================================================================");
        
        double billTotal = sum - discounT + vat;
        System.out.printf("\n                        \t \t Bill Total: \t" + "\t %.2f", billTotal);
        System.out.println("\n===========================================================================");
        System.out.printf("THIS IS NOT A RECEIPT, KINDLY PAY   %.2f", billTotal);
        System.out.println("\n===========================================================================");

        System.out.println();
        System.out.println();

        System.out.println("How much did the customer give to you? ");
        String payment1 = keyboardInput.next();
        double payment = Double.parseDouble(payment1);

        System.out.println();
        System.out.println();

        String mainMenu1 = """
JUSTINE STORES
MAIN BRANCH
LOCATION: 312, HERBERT MACAULAY WAY, SABO YABA, LAGOS.
TEL: 09021887133
                """;
        System.out.println(mainMenu1);

        LocalDateTime dateTime2 = LocalDateTime.now();
        System.out.println(dateTime2);
        System.out.println("Cashier: " + cashierName);
        System.out.println("Customer Name : " + customerName);
        System.out.println("===========================================================================");
        System.out.println("ITEM                QTY                PRICE                TOTAL (NGN) ");
        System.out.println("---------------------------------------------------------------------------");
        
        for (int count = 0; count < items.size(); count++) {
                System.out.println(items.get(count) + "\t" + "\t    " + quantity.get(count) + "\t" + "\t      " + pricee.get(count) + "\t" + "\t      " + total.get(count));
                System.out.println();
                }


        System.out.println();
        System.out.println("---------------------------------------------------------------------------");
        
        sum = 0;
        for (int count = 0; count < total.size(); count++) {
                sum += total.get(count);
        }

        System.out.printf("                        \t \t Sub Total: \t" + "\t %.2f", sum);
        
        discounT = sum * (discount / 100);
        System.out.printf("\n                        \t \t Discount: \t" + "\t %.2f ", discounT);
        
         vat = sum * (17.50 / 100);
         System.out.printf("\n                         \t   VAT  @  17.50: \t" + "\t %.2f", vat);
        System.out.println();
        
        System.out.println("===========================================================================");
        
        billTotal = sum - discounT + vat;
        System.out.printf("\n                        \t \t Bill Total: \t" + "\t %.2f", billTotal);
         System.out.printf("\n                        \t \t Amount Paid: \t" + "\t %.2f", payment);
         
        double balance = payment - billTotal;
        System.out.printf("\n                        \t \t Balance: \t" + "\t %.2f", balance);
        System.out.println("\n===========================================================================");
        System.out.println("                        THANK YOU FOR YOUR PATRONAGE");
        System.out.println("===========================================================================");








        System.out.print("Enter -1 to quit app or any other number to process another transaction: ");
        int sentinel = keyboardInput.nextInt();
        if (sentinel == -1) menu = false;
                }
        System.out.println("Shutting Down CheckOut software!");
        }
}