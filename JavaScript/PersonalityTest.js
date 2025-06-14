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


name = prompt("What is your name? ");

console.log(); 
        
console.log("Welcome to MBTI Personality Test!");        
console.log("You'll be presented with 20 questions categorized into 4 sections, kindly select the one that resonates with you more.");
console.log("<<<<<<Section One: Extroverted E vs Introverted I>>>>>>");
console.log("Pick A or B for each questions.");

console.log();
        
        for(let count = 0; count < arrayQuestions.length; count += 4){
                console.log(arrayQuestions[count][0] + " \t " + arrayQuestions[count][1]);
       
                let userSelection = " ";
                while(true) {
                       userSelection1 = prompt("");
                       userSelection = userSelection1.toUpperCase();
       
               if (userSelection == "A" || userSelection == "B") {
                       selectionDataBase.push(userSelection); 
                       break;
                 }
              else {
                      console.log("Expected A or B as Response \n I know this is an error, Please retry again");
                       }
                }
       
        }

        let aCount = 0;
       let bCount = 0;
        for (let count = 0; count < selectionDataBase.length; count++){
                if (selectionDataBase[count] == "A"){
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

        console.log();
        
        for(let count = 1; count < arrayQuestions.length; count += 4){
                console.log(arrayQuestions[count][0] + " \t " + arrayQuestions[count][1]);
       
        let userSelection = " ";
        while(true) {
                       userSelection1 = prompt("pick A or B");
                       userSelection = userSelection1.toUpperCase();
       
               if (userSelection == "A" || userSelection == "B") {
                       sensingIntuitive.push(userSelection); 
                       break;
                 }
              else {
                      console.log("Expected A or B as Response \n I know this is an error, Please retry again");
                       }
                }
       
        }

        let secACount = 0;
       let secBCount = 0;
        for (let count = 0; count < sensingIntuitive.length; count++){
                if (sensingIntuitive[count] == "A"){
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

        console.log();
        
        for(let count = 2; count < arrayQuestions.length; count += 4){
               console.log(arrayQuestions[count][0] + " \t " + arrayQuestions[count][1]);
       
        let userSelection = " ";
        while(true) {
                      userSelection1 = prompt("pick A or B");
                          userSelection = userSelection1.toUpperCase();
       
               if (userSelection == "A" || userSelection == "B") {
                       thinkingFeeling.push(userSelection); 
                       break;
                 }
              else {
                      console.log("Expected A or B as Response \n I know this is an error, Please retry again");
                       }
                }
       
        }

        let thirdACount = 0;
       let thirdBCount = 0;
        for (let count = 0; count < thinkingFeeling.length; count++){
                if (thinkingFeeling[count] == "A"){
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

        console.log();
        
        for(let count = 3; count < arrayQuestions.length; count += 4){
                console.log(arrayQuestions[count][0] + " \t " + arrayQuestions[count][1]);
       
        let userSelection = " ";
        while(true) {
              userSelection1 = prompt("pick A or B");
                  userSelection = userSelection1.toUpperCase();
       
               if (userSelection == "A" || userSelection == "B") {
                       judgingPerception.push(userSelection); 
                       break;
                 }
              else {
                      console.log("Expected A or B as Response \n I know this is an error, Please retry again");
                       }
                }
       
        }

        let fourthACount = 0;
       let fourthBCount = 0;
        for (let count = 0; count < judgingPerception.length; count++){
                if (judgingPerception[count] == "A"){
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
         console.log("Hello " + name + " You selected ");
      
      let counter = 0;
      for (let count = 0; count < arrayQuestions.length; count += 4){
                if (selectionDataBase[counter] == "A"){
                      console.log(arrayQuestions[count][0]);
                  }
                else {
                        console.log(arrayQuestions[count][1]);
                           }
                           counter++;
               }
        console.log();
      
        console.log("Number of A selected: " + aCount);  
       console.log("Number of  B selected: " + bCount);

  //Second set of question print out
         console.log();
      
      let secCounter = 0;
      for (let count = 1; count < arrayQuestions.length; count += 4){
                if (selectionDataBase[secCounter] == "A"){
                      console.log(arrayQuestions[count][0]);
                  }
                else {
                        console.log(arrayQuestions[count][1]);
                           }
                           secCounter++;
               }
        console.log();
      
        console.log("Number of A selected: " + secACount);  
       console.log("Number of  B selected: " +secBCount);

  //Third set of question print out
         console.log();
      
      let thirdCounter = 0;
      for (let count = 2; count < arrayQuestions.length; count += 4){
                if (selectionDataBase[thirdCounter] == "A"){
                      console.log(arrayQuestions[count][0]);
                  }
                else {
                        console.log(arrayQuestions[count][1]);
                           }
                           thirdCounter++;
               }
        console.log();
      
        console.log("Number of A selected: " + thirdACount);  
       console.log("Number of  B selected: " +thirdBCount);

  //Fourth set of question print out
         console.log();
      
      let fourthCounter = 0;
      for (let count = 3; count < arrayQuestions.length; count += 4){
                if (selectionDataBase[fourthCounter] == "A"){
                      console.log(arrayQuestions[count][0]);
                  }
                else {
                        console.log(arrayQuestions[count][1]);
                           }
                           fourthCounter++;
               }
        console.log();
      
        console.log("Number of A selected: " + fourthACount);  
       console.log("Number of  B selected: " + fourthBCount);

        console.log();

        console.log("Your personality is: " + personality);

        let personalityDisplay = personalityDescription(personality);

        console.log(personalityDisplay);
        
        