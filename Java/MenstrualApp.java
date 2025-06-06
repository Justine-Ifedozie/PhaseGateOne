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
8. To exit the app.
=============================
                """;

                System.out.println(mainMenu);
                System.out.print("Press a number to make a selection between 1 - 4: ");
                int menu = keyboardInput.nextInt();

                if (menu < 0 || menu > 4) {
                        System.out.println("You entered an invalid option!! Kindly try again or press 0 for Yoruba");
                        System.out.print("Press a number to make a selection between 1 - 4: ");
                        menu = keyboardInput.nextInt();
                        }

                switch (menu) {
                case 1: { 
                                EmployeeFunction.addEmployeePayroll();
                                }
                
                
                
                
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
                
                System.out.print("Enter the date your period started (yyyy-mm-dd): ");
                String userdate1 = keyboardInput.nextLine();
                LocalDate dateOne = LocalDate.parse(userdate1, formatter);
                
                System.out.print("Enter the date your period ended (yyyy-mm-dd): ");
                String userdate2 = keyboardInput.nextLine();
                  LocalDate dateTwo = LocalDate.parse(userdate2, formatter);
                
                  long daysDifference = ChronoUnit.DAYS.between(dateOne, dateTwo);
                
                  System.out.println(dateTwo);
                
                //LocalDate date = today.minusDays(userdate);
                    //LocalDate date = today.plusDays(userdate);

                System.out.println(dateOne);
              
               System.out.println(daysDifference);
        }
}
