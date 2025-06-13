import java.util.ArrayList;
import java.util.Scanner;
public class PersonalityTest {
        public static void main (String[] args) {
                Scanner keyboardInput = new Scanner(System.in);

        String [] [] arrayQuestions = {{"A. Expend energy, enjoy groups", "B. Conserve energy, enjoy one-on-one"},
                                    {"A. Interpret literally", "B. Looking for meaning and possiblities"},
                                    {"A. Logical, thinking, questioning", "B. Emphatetic, feeling, accomodating"},
                                    {"A. Orgamized, orderly", "B. Flexible, adaptable"},
                                    {"A. Moreoutgoing, think out loud", "B. more reserved, think to yourself"},
                                    {"A. Practical, realistic, experiential", "B. Imagimative, innovative, theoretical"},
                                    {"A. Candid, straight forward, frank", "B. Tactful, kind, encouraging"},
                                    {"A. Plan, schedule", "B. Unplanned, spontaneous"},
                                    {"A. Seek many tasks, public activities, interaction with others", "B. Seek private, solidarity activities with quiet to concentrate"},
                                    {"A. Standard, usual, conventional", "B. Different, novel, unique"},
                                    {"A. Firm, tend to criticize, hold the line", "B. Gentle, tend to appreciate, conciliate"},
                                    {"A. Regulated, structured", "B. Easy-going, live and let live"},
                                    {"A. External, communicative, express yourself", "B. Internal, reticent, keep to yourself"},
                                    {"A. Focus on here-and-now", "B. Look to the future, global perspective, big picture"},
                                    {"A. Tough-minded, just", "B. Tender-hearted, merciful"},
                                    {"A. Preparation, plan ahead", "B. Go with the flow, adapt as you go"},
                                    {"A. Active, initiate", "B. Reflective, deliberate"},
                                    {"A. Facts, things, what is", "B. Ideas, dreams, what could be, philosophical"},
                                    {"A. Matter of fact, issue-oriented", "B. Sensitive, people-oriented, compassionate"},
                                    {"A. Control, govern", "B. Latitude, freedom"}};


        System.out.println("What is your name? ");
        String name = keyboardInput.nextLine();

        System.out.println(); 
        
        System.out.println("Welcome to MBTI Personality Test!");        
        System.out.println("You'll be presented with 20 options, kindly select the one that resonates with you more.");
        System.out.println("Pick A or B for each questions.");

        System.out.println();
        
        for(int count = 0; count < arrayQuestions.length; count++){
                System.out.println(arrayQuestions[count][0] + " \t " + arrayQuestions[count][1]);
       
        String userSelection = " ";
        while(true) {
               userSelection = keyboardInput.next().toUpperCase();
       
               if (userSelection.equals("A") || userSelection.equals("B") {
                       break;
              else {
                      System.out.println("Expected A or B as Response \n I know this is an error, Please retry again");
                       }
       
       
       
        }











        }
}