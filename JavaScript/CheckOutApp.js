const prompt = require("prompt-sync")();

let dataBase = { };
menu = true;
while (menu) {

                customerName = prompt("What is the customer's Name? ");

                subMenu = true;
                while (subMenu) {

                userPurchase = Number(prompt("What did the user buy? "));
                dataBase.userCart = userPurchase;

                pieces = Number(prompt("How many pieces? "));
                dataBase.quantity = pieces;

                pricePerUnit = Number(prompt("How much per unit? "));
                dataBase.price = pricePerUnit;

                toTal = pricePerUnit * pieces;
                dataBase.total = toTals;
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
