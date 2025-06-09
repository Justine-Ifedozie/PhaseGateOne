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




        System.out.print("Enter -1 to quit app: ");
        int sentinel = keyboardInput.nextInt();
        if (sentinel == -1) menu = false;
                }
        }
}