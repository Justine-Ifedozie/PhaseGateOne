import java.util.ArrayList;
import java.util.Scanner;
public class StudentGrade {
        public static void main(String[] args) {
                Scanner keyboardInput = new Scanner(System.in);

                int studentsNumber = 0, subjectNumber = 0;
                
                ArrayList <Integer> score = new ArrayList <Integer>();
                //ArrayList <Integer> score = new ArrayList <Integer>();

                System.out.println("How many students do you have? ");
                studentsNumber = keyboardInput.nextInt();

                System.out.println("How many subjects do they offer? ");
                subjectNumber = keyboardInput.nextInt();

                System.out.println("Saving  >>>>>>>>>>>>>>>>>>>>>>>>>>>>");
                System.out.println("Saved successfully");


        for (int count = 1; count != studentsNumber + 1; count++) {


                for (int counter = 1; counter != subjectNumber + 1; counter++) {
                        System.out.println("Entering score for student " + count);
                        System.out.println("Enter score for subject " + counter);
                        int subjectScore = keyboardInput.nextInt();
                        score.add(subjectScore);

                         System.out.println("Saving  >>>>>>>>>>>>>>>>>>>>>>>>>>>>");
                         System.out.println("Saved successfully");
                        }
                }
int counter = 0;

        System.out.println("=============================================");

        System.out.print("STUDENT \t ");
        for (int count = 1; count < subjectNumber + 1; count++) {
                System.out.print("SUB" + count + "\t ");
        }
        System.out.println(" TOT \t AVE \t POS ");
        System.out.println("=============================================");
        for (int count = 1; count < studentsNumber + 1; count++) {
                System.out.print("Student " + count);
                
int countt = 0;
                for (; counter < score.size(); counter++) {
                        System.out.print(" \t " + score.get(counter));
                        countt++;
                        if (countt == subjectNumber){
                         break;
                        }
                      }
                System.out.println();
        }



        System.out.println("=============================================");
        System.out.println("=============================================");






        }
}