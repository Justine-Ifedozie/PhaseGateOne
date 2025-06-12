import java.util.ArrayList;
import java.util.Scanner;
public class StudentGrade {
        public static void main(String[] args) {
                Scanner keyboardInput = new Scanner(System.in);

                ArrayList <Integer> score = new ArrayList <Integer>();

                System.out.println("How many students do you have? ");
                int studentsNumber = keyboardInput.nextInt();

                System.out.println("How many subjects do they offer? ");
                int subjectNumber = keyboardInput.nextInt();

                System.out.print("Saving  >>>>>>>>>>>>>>>>>>>>>>>>>>>>");
                System.out.print("Saved successfully");


        for (int count = 1; count != studentsNumber + 1; count++) {
                System.out.println("Enter score for subject " + counter);
                int \' = keyboardInput.nextInt();



                for (int counter = 1; counter != subjectNumber + 1; counter++) {
                        System.out.print("Entering score for student " + count);
                        System.out.println("Enter score for subject " + counter);
                        int subjectNumber = keyboardInput.nextInt();

                         System.out.print("Saving  >>>>>>>>>>>>>>>>>>>>>>>>>>>>");
                        System.out.print("Saved successfully");
                        }
                }
















        }
}