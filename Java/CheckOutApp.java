import java.util.Scanner;
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
        String cashier'sName = keyboardInput.next();

        System.out.println("How much discount will he get? ");
        String discount1 = keyboardInput.next();
        int discount = Integer.parseInt(discount1);

        String mainMenu = """
Welcome to JStarr menstrual calcnic!
=============================
What will you like to do today?

Press: 
1. To calculate the length of your cycle.
2. To calculate your flow date.
3. To know your safe period.
4. To calculate your ovulation date.
5. To get tips about painful menstruation.
6. To get tips about irregular menstruation.
7. To consult a gynecologist.
0. To exit the app.
=============================
                """;

                System.out.println(mainMenu);





        System.out.print("Enter -1 to quit app or any other number to process another transaction: ");
        int sentinel = keyboardInput.nextInt();
        if (sentinel == -1) menu = false;
                }
        }
}