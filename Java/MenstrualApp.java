import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Scanner;

public class MenstrualApp {
        public static void main (String[] args) {
                Scanner keyboardInput = new Scanner(System.in);
                
                boolean meNU = true;
                while (meNU) {

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
                System.out.print("Press a number to make a selection between 0 - 7: ");
                int menu = keyboardInput.nextInt();

                if (menu < 0 || menu > 7) {
                        System.out.println("You entered an invalid option!! Kindly try again or press 0 for Yoruba");
                        System.out.print("Press a number to make a selection between 0 - 7: ");
                        menu = keyboardInput.nextInt();
                        }
        String name = " ";
        long cycleLength = 0;
       
                switch (menu) {
                case 1: { 
                                name = keyboardInput.nextLine();

                                System.out.println();
                                System.out.println("Calculate the Length of your menstrual cycle");
                                
                                System.out.print("What is your name? ");
                                name = keyboardInput.nextLine();
                                                          
                                System.out.print("Enter the date of the first day your previous period started (yyyy-mm-dd): ");
                                String userdate1 = keyboardInput.nextLine();
                
                                System.out.print("Enter the date of a-day before you had your new period (yyyy-mm-dd): ");
                                String userdate2 = keyboardInput.nextLine();
     
                                cycleLength = menstrualFunctions.calculateMensCycle(userdate1, userdate2);
                                System.out.println();
                                System.out.println(name + ", your menstrual cycle is " + cycleLength + "days");
                                
                                System.out.print("Kindly enter any number to go back to the main menu: ");
                                String back = keyboardInput.nextLine();
                              }  

                case 2: { 
                                System.out.print("Have you used our app to calculate your menstrual cycle length (yes/no)?  ");
                                String userResponse = keyboardInput.nextLine();
                                userResponse = keyboardInput.nextLine();
                                
                                if (userResponse.equalsIgnoreCase("yes")){
                                        System.out.print("How many days do your period last? ");
                                        String periodDays = keyboardInput.nextLine();
                                        System.out.print(cycleLength);

                            }
                                //else if (userResponse.equalsIgnoreCase("no")){


                                        //}
                                else{
                                        System.out.print("Invalid response!");
                                        }



                                }
                                
                                
                                
                        }
               
               }
        }
}
