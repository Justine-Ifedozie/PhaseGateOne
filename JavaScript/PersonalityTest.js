const prompt = require("prompt-sync")();

let selectionDataBase = [];
let selectedQuestions = [];
let sensingIntuitive = [];
let thinkingFeeling = [];
let judgingPerception = [];

let personality = " ";
        
let arrayQuestions = [["A. Expend energy, enjoy groups", "B. Conserve energy, enjoy one-on-one"],
                                    ["A. Interpret literally", "B. Looking for meaning and possiblities"],
                                    ["A. Logical, thinking, questioning", "B. Emphatetic, feeling, accomodating"],
                                    ["A. Organized, orderly", "B. Flexible, adaptable"],
                                    ["A. Moreoutgoing, think out loud", "B. more reserved, think to yourself"],
                                    ["A. Practical, realistic, experiential", "B. Imagimative, innovative, theoretical"],
                                    ["A. Candid, straight forward, frank", "B. Tactful, kind, encouraging"],
                                    ["A. Plan, schedule", "B. Unplanned, spontaneous"],
                                    ["A. Seek many tasks, public activities, interaction with others", "B. Seek private, solidarity activities with quiet to concentrate"],
                                    ["A. Standard, usual, conventional", "B. Different, novel, unique"],
                                    ["A. Firm, tend to criticize, hold the line", "B. Gentle, tend to appreciate, conciliate"],
                                    ["A. Regulated, structured", "B. Easy-going, live and let live"],
                                    ["A. External, communicative, express yourself", "B. Internal, reticent, keep to yourself"],
                                    ["A. Focus on here-and-now", "B. Look to the future, global perspective, big picture"],
                                    ["A. Tough-minded, just", "B. Tender-hearted, merciful"],
                                    ["A. Preparation, plan ahead", "B. Go with the flow, adapt as you go"],
                                    ["A. Active, initiate", "B. Reflective, deliberate"],
                                    ["A. Facts, things, what is", "B. Ideas, dreams, what could be, philosophical"],
                                    ["A. Matter of fact, issue-oriented", "B. Sensitive, people-oriented, compassionate"],
                                    ["A. Control, govern", "B. Latitude, freedom"]];


name = promp("What is your name? ");

console.log(); 
        
console.log("Welcome to MBTI Personality Test!");        
console.log("You'll be presented with 20 questions categorized into 4 sections, kindly select the one that resonates with you more.");
console.log("<<<<<<Section One: Extroverted E vs Introverted I>>>>>>");
console.log("Pick A or B for each questions.");

console.log();
        
        for(let count = 0; count < arrayQuestions.length; count += 4){
                console.log(arrayQuestions[count][0] + " \t " + arrayQuestions[count][1]);
       
        String userSelection = " ";
        while(true) {
               userSelection = keyboardInput.next().toUpperCase();
       
               if (userSelection.equals("A") || userSelection.equals("B")) {
                       selectionDataBase.add(userSelection); 
                       break;
                 }
              else {
                      System.out.println("Expected A or B as Response \n I know this is an error, Please retry again");
                       }
                }
       
        }

        int aCount = 0;
       int bCount = 0;
        for (int count = 0; count < selectionDataBase.size(); count++){
                if (selectionDataBase.get(count).equals("A")){
                        aCount++;
                }
                else{
                        bCount++;
        }
       }
       
        if (aCount > bCount) personality += "E";
       else{
       personality += "I";
        }
        
   
//For the second group of question.

        System.out.println();
        
        for(int count = 1; count < arrayQuestions.length; count += 4){
                System.out.println(arrayQuestions[count][0] + " \t " + arrayQuestions[count][1]);
       
        String userSelection = " ";
        while(true) {
               userSelection = keyboardInput.next().toUpperCase();
       
               if (userSelection.equals("A") || userSelection.equals("B")) {
                       sensingIntuitive.add(userSelection); 
                       break;
                 }
              else {
                      System.out.println("Expected A or B as Response \n I know this is an error, Please retry again");
                       }
                }
       
        }

        int secACount = 0;
       int secBCount = 0;
        for (int count = 0; count < sensingIntuitive.size(); count++){
                if (sensingIntuitive.get(count).equals("A")){
                        secACount++;
                }
                else{
                        secBCount++;
        }
       }

        if (secACount > secBCount) personality += "S";
       else{
       personality += "N";
        }


//For the third group of question.

        System.out.println();
        
        for(int count = 2; count < arrayQuestions.length; count += 4){
                System.out.println(arrayQuestions[count][0] + " \t " + arrayQuestions[count][1]);
       
        String userSelection = " ";
        while(true) {
               userSelection = keyboardInput.next().toUpperCase();
       
               if (userSelection.equals("A") || userSelection.equals("B")) {
                       thinkingFeeling.add(userSelection); 
                       break;
                 }
              else {
                      System.out.println("Expected A or B as Response \n I know this is an error, Please retry again");
                       }
                }
       
        }

        int thirdACount = 0;
       int thirdBCount = 0;
        for (int count = 0; count < thinkingFeeling.size(); count++){
                if (thinkingFeeling.get(count).equals("A")){
                        thirdACount++;
                }
                else{
                        thirdBCount++;
        }
       }

        if (thirdACount > thirdBCount) personality += "T";
       else{
       personality += "F";
        }


//For the fourth group of question.

        System.out.println();
        
        for(int count = 3; count < arrayQuestions.length; count += 4){
                System.out.println(arrayQuestions[count][0] + " \t " + arrayQuestions[count][1]);
       
        String userSelection = " ";
        while(true) {
               userSelection = keyboardInput.next().toUpperCase();
       
               if (userSelection.equals("A") || userSelection.equals("B")) {
                       judgingPerception.add(userSelection); 
                       break;
                 }
              else {
                      System.out.println("Expected A or B as Response \n I know this is an error, Please retry again");
                       }
                }
       
        }

        int fourthACount = 0;
       int fourthBCount = 0;
        for (int count = 0; count < judgingPerception.size(); count++){
                if (judgingPerception.get(count).equals("A")){
                        fourthACount++;
                }
                else{
                        fourthBCount++;
        }
       }

        if (fourthACount > fourthBCount) personality += "J";
       else{
       personality += "P";
        }

        
 //First set of question print out
         System.out.println("Hello " + name + " You selected ");
      
      int counter = 0;
      for (int count = 0; count < arrayQuestions.length; count += 4){
                if (selectionDataBase.get(counter).equals("A")){
                      System.out.println(arrayQuestions[count][0]);
                  }
                else {
                        System.out.println(arrayQuestions[count][1]);
                           }
                           counter++;
               }
        System.out.println();
      
        System.out.println("Number of A selected: " + aCount);  
       System.out.println("Number of  B selected: " + bCount);

  //Second set of question print out
         System.out.println();
      
      int secCounter = 0;
      for (int count = 1; count < arrayQuestions.length; count += 4){
                if (selectionDataBase.get(secCounter).equals("A")){
                      System.out.println(arrayQuestions[count][0]);
                  }
                else {
                        System.out.println(arrayQuestions[count][1]);
                           }
                           secCounter++;
               }
        System.out.println();
      
        System.out.println("Number of A selected: " + secACount);  
       System.out.println("Number of  B selected: " +secBCount);

  //Third set of question print out
         System.out.println();
      
      int thirdCounter = 0;
      for (int count = 2; count < arrayQuestions.length; count += 4){
                if (selectionDataBase.get(thirdCounter).equals("A")){
                      System.out.println(arrayQuestions[count][0]);
                  }
                else {
                        System.out.println(arrayQuestions[count][1]);
                           }
                           thirdCounter++;
               }
        System.out.println();
      
        System.out.println("Number of A selected: " + thirdACount);  
       System.out.println("Number of  B selected: " +thirdBCount);

  //Fourth set of question print out
         System.out.println();
      
      int fourthCounter = 0;
      for (int count = 3; count < arrayQuestions.length; count += 4){
                if (selectionDataBase.get(fourthCounter).equals("A")){
                      System.out.println(arrayQuestions[count][0]);
                  }
                else {
                        System.out.println(arrayQuestions[count][1]);
                           }
                           fourthCounter++;
               }
        System.out.println();
      
        System.out.println("Number of A selected: " + fourthACount);  
       System.out.println("Number of  B selected: " + fourthBCount);

        System.out.println();

        System.out.println("Your personality is: " + personality);

        String personalityDisplay = PersonalityTestFunction.personalityDescription(personality);

        System.out.println(personalityDisplay);
        
        
     }
}
