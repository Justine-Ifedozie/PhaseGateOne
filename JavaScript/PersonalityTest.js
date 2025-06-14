const prompt = require("prompt-sync")();

function personalityDescription(personal){
                let personalityType = " ";
               
               let personality = personal.trim();
               
                if (personality == "INTJ"){
                        personalityType = `
Architect 
INTJ Personality is a personality type with the Introverted, 
Intuitive, Thinking, and Judging traits. These thoughtful 
tacticians love perfecting the details of life, applying creativity 
and rationality to everything they do. Their inner world is often 
a private, complex one.   
                                                        `;
                }
           else if (personality == "INTP"){
                        personalityType = `
Logician
INTP (Logician) is a personality type with the Introverted, 
Intuitive, Thinking, and Prospecting traits. These flexible thinkers 
enjoy taking an unconventional approach to many aspects of life. 
They often seek out unlikely paths, mixing willingness to 
experiment with personal creativity.
                                                        `;
                }
           else if (personality == "ENTJ"){
                        personalityType = `
Commander
ENTJ (Commander) is a personality type with the Extraverted, 
Intuitive, Thinking, and Judging traits. They are decisive people 
who love momentum and accomplishment. They gather information 
to construct their creative visions but rarely hesitate for long before 
acting on them.
                                                        `;
                }
           else if (personality == "ENTP"){
                        personalityType = `
Debater
ENTP (Debater) is a personality type with the Extraverted, Intuitive, 
Thinking, and Prospecting traits. They tend to be bold and creative, 
deconstructing and rebuilding ideas with great mental agility. 
They pursue their goals vigorously despite any resistance they might 
encounter.
                                                        `;
                }
           else if (personality == "INFJ"){
                        personalityType = `
Advocate
INFJ (Advocate) is a personality type with the Introverted, Intuitive, 
Feeling, and Judging traits. They tend to approach life with deep 
thoughtfulness and imagination. Their inner vision, personal values, 
and a quiet, principled version of humanism guide them in all things.
                                                        `;
                }
           else if (personality == "INFP"){
                        personalityType = `
Mediator
INFP (Mediator) is a personality type with the Introverted, Intuitive, 
Feeling, and Prospecting traits. These rare personality types tend to 
be quiet, open-minded, and imaginative, and they apply a caring and 
creative approach to everything they do.   
                                                        `;
                }
           else if (personality == "ENFJ"){
                        personalityType = `
Protagonist
ENFJ (Protagonist) is a personality type with the Extraverted, Intuitive, 
Feeling, and Judging traits. These warm, forthright types love helping 
others, and they tend to have strong ideas and values. 
They back their perspective with the creative energy to achieve their goals.
                                                        `;
                }
           else if (personality == "ENFP"){
                        personalityType = `
Campaigner
ENFP (Campaigner) is a personality type with the Extraverted, Intuitive, 
Feeling, and Prospecting traits. These people tend to embrace big ideas 
and actions that reflect their sense of hope and goodwill toward others. 
Their vibrant energy can flow in many directions.
                                                        `;
                }
           else if (personality == "ISTJ"){
                        personalityType = `
Logistician
ISTJ (Logistician) is a personality type with the Introverted, Observant, 
Thinking, and Judging traits. These people tend to be reserved yet willful, 
with a rational outlook on life. They compose their actions carefully and 
carry them out with methodical purpose.
                                                        `;
                }
           else if (personality == "ISFJ"){
                        personalityType = `
Defender
ISFJ (Defender) is a personality type with the Introverted, Observant, 
Feeling, and Judging traits. These people tend to be warm and 
unassuming in their own steady way. They’re efficient and responsible, 
giving careful attention to practical details in their daily lives.
                                                        `;
                }
           else if (personality == "ESTJ"){
                        personalityType = `
Executive
ESTJ (Executive) is a personality type with the Extraverted, Observant, 
Thinking, and Judging traits. They possess great fortitude, emphatically 
following their own sensible judgment. They often serve as a stabilizing 
force among others, able to offer solid direction amid adversity.
                                                        `;
                }
           else if (personality == "ESFJ"){
                        personalityType = `
Consul
ESFJ (Consul) is a personality type with the Extraverted, Observant, 
Feeling, and Judging traits. They are attentive and people-focused, 
and they enjoy taking part in their social community. Their achievements 
are guided by decisive values, and they willingly offer guidance to others.
                                                        `;
                }
           else if (personality == "ISTP"){
                        personalityType = `
Virtuoso
ISTP (Virtuoso) is a personality type with the Introverted, Observant, 
Thinking, and Prospecting traits. They tend to have an individualistic 
mindset, pursuing goals without needing much external connection. 
They engage in life with inquisitiveness and personal skill, varying their 
approach as needed.
                                                        `;
                }
           else if (personality == "ISFP"){
                        personalityType = `
Adventurer
ISFP (Adventurer) is a personality type with the Introverted, Observant, 
Feeling, and Prospecting traits. They tend to have open minds, approaching life, 
new experiences, and people with grounded warmth. Their ability to stay in the 
moment helps them uncover exciting potentials.
                                                        `;
                }
           else if (personality == "ESTP"){
                        personalityType = `
Entrepreneur
ESTP (Entrepreneur) is a personality type with the Extraverted, Observant, 
Thinking, and Prospecting traits. They tend to be energetic and action-oriented, 
deftly navigating whatever is in front of them. They love uncovering 
life’s opportunities, whether socializing with others or in more personal pursuits.
                                                         `;
                }
           else if (personality == "ESFP"){
                        personalityType = `
Entertainer
ESFP (Entertainer) is a personality type with the Extraverted, Observant, Feeling, 
and Prospecting traits. These people love vibrant experiences, engaging in life eagerly 
and taking pleasure in discovering the unknown. They can be very social, often 
encouraging others into shared activities.
                                                         `;
                }    
                
        else{
                personalityType = "Invalid Input";
                }

                return personalityType;
        }          


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
                       userSelection1 = prompt("");
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
                      userSelection1 = prompt("");
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
              userSelection1 = prompt("");
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
        
        