import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Scanner;

public class MenstrualApp {
        public static void main (String[] args) {
                Scanner keyboardInput = new Scanner(System.in);

        long cycleLength = 0;
        String userdate2 = " ";
        String name = " ";
        long [] array = {cycleLength};

            
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


       
                switch (menu) {
                case 1: { 
                                name = keyboardInput.nextLine();

                                System.out.println();
                                System.out.println("Calculate the Length of your menstrual cycle");
                                
                                System.out.print("What is your name? ");
                                name = keyboardInput.nextLine();
                                                          
                                System.out.print("Enter the start date of your previous two periods (yyyy-mm-dd): ");
                                String userdate1 = keyboardInput.nextLine();
                
                                System.out.print("Enter the start date of your last period (yyyy-mm-dd): ");
                                userdate2 = keyboardInput.nextLine();
     
                                cycleLength = menstrualFunctions.calculateMensCycle(userdate1, userdate2);
                                array[0] = cycleLength;
                                System.out.println();
                                System.out.println(name + ", your menstrual cycle length is " + cycleLength + " days");
                                
                                System.out.print("Kindly enter any number to go back to the main menu: ");
                                String dummyButton = keyboardInput.nextLine();
                                System.out.println();
                                break;
                              }  

                case 2: { 
                                System.out.print("Have you used our app to calculate your menstrual cycle length (yes/no)?  ");
                                String userResponse = keyboardInput.nextLine();
                                userResponse = keyboardInput.nextLine();
                                
                                if (userResponse.equalsIgnoreCase("yes")){
                                        System.out.print("How many days does your period last? ");
                                        String periodDays = keyboardInput.nextLine();
                                        int flowLength = Integer.parseInt(periodDays);
                                        
                                        long mensCycle = (array[0]);
                                        int menstCycle = Math.toIntExact(mensCycle);

                                        menstrualFunctions.calculateFlowDays(name, flowLength, menstCycle, userdate2);
                                        System.out.print("Kindly enter any number to go back to the main menu: ");
                                        String dummyButton = keyboardInput.nextLine();
                                        System.out.println();
                                        break;
                            }
                                else if (userResponse.equalsIgnoreCase("no")){
                                                System.out.print("What is your name? ");
                                                name = keyboardInput.nextLine();

                                        System.out.print("How many days does your period last? ");
                                        String periodDays = keyboardInput.nextLine();
                                        int flowLength = Integer.parseInt(periodDays);

                                        System.out.print("Enter the start date of your last period (yyyy-mm-dd): ");
                                        String lastPeriodDate = keyboardInput.nextLine();

                                        System.out.print("How long is your menstrual cycle in days (example - 28)? ");
                                        String cycleLengthDays = keyboardInput.nextLine();
                                        int CycleLength = Integer.parseInt(cycleLengthDays);

                                        menstrualFunctions.calculateFlowDates(name, flowLength, CycleLength, lastPeriodDate);
                                        System.out.println();

                                        System.out.print("Kindly enter any number to go back to the main menu: ");
                                        String dummyButton = keyboardInput.nextLine();
                                        System.out.println();
                                        break;
                                        }
                                else{
                                        System.out.print("Invalid response!");
                                        System.out.print("Kindly enter any number to go back to the main menu: ");
                                        String dummyButton = keyboardInput.nextLine();
                                        System.out.println();
                                        break;    
                                        }
                                }
                                
                case 3: {      
                                System.out.print("What is the length of your shortest cycle? ");
                                String shortCycle = keyboardInput.nextLine();
                                int shortCycle2 = Integer.parseInt(shortCycle);

                                System.out.print("What is the length of your longest cycle? ");
                                String longCycle = keyboardInput.nextLine();
                                int longCycle2 = Integer.parseInt(longCycle);

                                System.out.print("Enter the start date of your recent period (yyyy-mm-dd): ");
                                String lastPeriodDate = keyboardInput.nextLine();

                                menstrualFunctions.calculateSafeDays(shortCycle2, longCycle2, lastPeriodDate);
                                }     
                                
                case 4: {      
                                
                                
                                
                                }                  
                                
                case 5: {      
                                System.out.println();
                                String painfulTips = """
Below are tips to reduce pain during menstruation!
=======================================
1. Heat Therapy:
        Applying heat to the lower abdomen can 
        help relax muscles and reduce pain.
        
2. Regular Exercise:
        Physical activity, including yoga, can release 
        endorphins that help relieve pain. 
        Even gentle exercise can be effective. 
        
3. Over-the-Counter Pain Relief:
        Ibuprofen, naproxen, and acetaminophen can 
        help reduce pain and inflammation. 
        Start taking them a day or two before your 
        period is expected. 

4. Stress Reduction:
        Practice relaxation techniques like yoga or 
        meditation, as stress can worsen menstrual pain. 


5. Dietary Changes:
        Foods to Avoid: Reduce your intake of caffeine, 
        alcohol, sugar, and salt, as these can exacerbate 
        bloating and pain. 


6. Hydration:
        Drinking plenty of water can help prevent 
        bloating and reduce pain. 

=======================================
                """;
                                System.out.println(painfulTips);
       
                                System.out.print("Kindly enter any number to go back to the main menu: ");
                                String dummyButton = keyboardInput.nextLine();
                                dummyButton = keyboardInput.nextLine();
                                System.out.println();
                                break;    
                                }             
                           
                        case 6: {                       
                                        System.out.println();
                                        String irregularMens = """
Below are tips to correct irregular menstruation!
=======================================
1. Diet:
        A balanced diet rich in fruits, vegetables, whole 
        grains, lean protein, and healthy fats can 
        support hormonal balance. 

2. Weight Management:
        Maintaining a healthy weight can be beneficial, 
        as extreme weight loss or gain can disrupt hormonal 
        balance and lead to irregular periods. 


3. Stress Management:
        Practicing stress-reducing techniques like meditation, 
        yoga, or deep breathing can help regulate hormones 
        and potentially improve menstrual regularity. 
=======================================
                """;
                                        System.out.println(irregularMens);
       
                                        System.out.print("Kindly enter any number to go back to the main menu: ");
                                        String dummyButton = keyboardInput.nextLine();
                                        dummyButton = keyboardInput.nextLine();
                                        System.out.println();
                                        break;  
                                }                    
                    
                case 7: {    
                                System.out.println();
                                String gynecologist = """
Kindly call or send Dr Justine an email!
=======================================
Phone number: 09021887133
Email: ifedoziennamdi445@gmail.com
=======================================
                """;
                                System.out.println(gynecologist);
       
                                System.out.print("Kindly enter any number to go back to the main menu: ");
                                String dummyButton = keyboardInput.nextLine();
                                dummyButton = keyboardInput.nextLine();
                                System.out.println();
                                break;  
                                }
                     
                case 0: {    
                                meNU = false;
                                break;
                                }


                        }
               
               }
        }
}
