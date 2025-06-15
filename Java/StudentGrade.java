import java.util.ArrayList;
import java.util.Scanner;
public class StudentGrade {
        public static void main(String[] args) {
                Scanner keyboardInput = new Scanner(System.in);

                int studentsNumber = 0, subjectNumber = 0, total = 0;
                
                System.out.println("How many students do you have? ");
                studentsNumber = keyboardInput.nextInt();

                System.out.println("How many subjects do they offer? ");
                subjectNumber = keyboardInput.nextInt();
                
                int [] [] array = new int [studentsNumber] [subjectNumber];

                System.out.println("Saving  >>>>>>>>>>>>>>>>>>>>>>>>>>>>");
                System.out.println("Saved successfully");


        for (int count = 0; count < array.length; count++) {

                for (int counter = 0; counter < array[count].length; counter++) {
                        System.out.println("Entering score for student " + (count+ 1));
                        System.out.println("Enter score for subject " + (counter + 1));
                        array[count][counter] = keyboardInput.nextInt();

                         System.out.println("Saving  >>>>>>>>>>>>>>>>>>>>>>>>>>>>");
                         System.out.println("Saved successfully");
                        }
                }

        System.out.println("==========================================================");

        System.out.print("STUDENT \t ");
        for (int count = 1; count < subjectNumber + 1; count++) {
                System.out.print("SUB" + count + "\t ");
        }
        System.out.println(" TOT \t AVE \t POS ");
        System.out.println("==========================================================");
        for (int count = 0; count < studentsNumber; count++) {
                total = 0;
                System.out.print("Student " + (count + 1));
                
                for (int counter = 0; counter < subjectNumber; counter++) {
                      total += array[count][counter];
                        System.out.print(" \t " + array[count][counter]);
                      }
              System.out.print("\t " + total);
                System.out.println();
        }



        System.out.println("==========================================================");
        System.out.println("==========================================================");






        }
}