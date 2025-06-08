const prompt = require("prompt-sync")();

function calculateMensCycle(firstOldPeriod, newPeriod) {
        const oldPeriod = new Date(firstOldPeriod);
       const firstNewPeriod = new Date(newPeriod);
       const newdate = firstNewPeriod.getTime() - oldPeriod.getTime();
        const aDay = 1000 * 60 * 60 * 24;
        const days = parseInt(newdate / aDay); 
        return days;
        };

function calculateFlowDates(flowLength, CycleLength, lastPeriodDate){
        const lastPeriod = new Date(lastPeriodDate);
        const addCycleLength = CycleLength;
       lastPeriod.setDate(lastPeriod.getDate() + addCycleLength);
       const addFlowLength = flowLength - 1;
       const newLastPeriod = new Date(lastPeriod);
        newLastPeriod.setDate(newLastPeriod.getDate() + addFlowLength);
       return {lastPeriod, newLastPeriod};
      }

        function calculateSafeDays(shortCycle2, longCycle2, lastPeriodDate) {
                const lastPeriod = new Date(lastPeriodDate);
                const lastPeriod2 = new Date(lastPeriod);
              const lastPeriod3 = new Date(lastPeriodDate);
              
                const newShortCycle = shortCycle2 - 18;
                const newLongCycle = longCycle2 - 11;
                lastPeriod.setDate(lastPeriod.getDate() + (newShortCycle - 2));

                lastPeriod3.setDate(lastPeriod3.getDate() + newLongCycle);
                return {lastPeriod2, lastPeriod, lastPeriod3};
                }

        function calculateOvulation(averageCycle2, lastPeriodDate){
                const periodDate = new Date(lastPeriodDate);
                 periodDate.setDate(periodDate.getDate() + averageCycle2);
                  periodDate.setDate(periodDate.getDate() - 14);     
                 const fertileWindow = new Date(periodDate);
                  fertileWindow.setDate(fertileWindow.getDate() - 5);
                return {periodDate, fertileWindow};
                }


let cycleLength = 0
let userdate2 = " "
let name = " "

            
meNU = true;
while (meNU) {

const mainMenu = `
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
=============================`;
                

        console.log(mainMenu)
        let menu = Number(prompt('Press a number to make a selection between 0 - 7: '))
        
        if (menu < 0 || menu > 7) {
                console.log("You entered an invalid option!! Kindly try again or press 0 for Yoruba");
                menu = Number(prompt('Press a number to make a selection between 0 - 7: '))
        }

                switch (menu) {
                case 1: { 
                                console.log('\n');
                                console.log("Calculate the Length of your menstrual cycle");
                                name = prompt('What is your name? ')                                                             
                                userdate1 = prompt('Enter the start date of your previous two periods (yyyy-mm-dd): ')
                                userdate2 = prompt('Enter the start date of your last periods (yyyy-mm-dd): ')
                                cycleLength = calculateMensCycle(userdate1, userdate2);

                                console.log('\n');
                                console.log(name + ", your menstrual cycle length is: " + cycleLength + " days");
                                
                                let dummyButton = prompt("Kindly enter any number to go back to the main menu: ");
                                break;
                              }  

                case 2: { 
                                        name = prompt('What is your name? ')                   
                                        let flowLength = Number(prompt('How many days does your period last? '))

                                        let lastPeriodDate = prompt('Enter the start date of your last period (yyyy-mm-dd): ')

                                        let CycleLength = Number(prompt('What is the legth of your menstrual cycle in days (example - 28)? '))

                                        let {lastPeriod, newLastPeriod} = calculateFlowDates(flowLength, CycleLength, lastPeriodDate);
                                        console.log(name + ", your new period will start on: " + lastPeriod);
                                        console.log("Then end: " + newLastPeriod);
                                        console.log('\n');

                                         let dummyButton = prompt("Kindly enter any number to go back to the main menu: ");
                                         break;
                                        }
                                
                case 3: {      
                                let shortCycle2 = Number(prompt('What is the length of your shortest cycle? '))

                                let longCycle2 = Number(prompt('What is the length of your longest cycle? '))

                                let lastPeriodDate = prompt('Enter the start date of your recent period (yyyy-mm-dd): ')

                                let {lastPeriod2, lastPeriod, lastPeriod3} = calculateSafeDays(shortCycle2, longCycle2, lastPeriodDate);
                                console.log('\n');
                            console.log("Your safe day before your fertile window is from: " + lastPeriod2 + " until " + lastPeriod);
                            console.log("Your safe days after fertile window is from: " + lastPeriod3 + " until your next period start");
                                console.log('\n');

                                let dummyButton = prompt("Kindly enter any number to go back to the main menu: ");
                                break;
                                }     
                                
                case 4: {      
                                let averageCycle2 = Number(prompt('What is the length of your average cycle? '))

                                let lastPeriodDate = prompt('Enter the start date of your immediate past period (yyyy-mm-dd): ')

                                let {periodDate, fertileWindow} = calculateOvulation(averageCycle2, lastPeriodDate);
                                console.log('\n');
                            console.log("Your ovulation day is: " + periodDate);
                            console.log("Your fertile window is from: " + fertileWindow + " until " + periodDate);

                                 let dummyButton = prompt("Kindly enter any number to go back to the main menu: ");
                                 break;
                                }                  
                                
                case 5: {      
                                console.log('\n');
                                const painfulTips = `
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
                      `;
                                console.log(painfulTips);
       
                                    let dummyButton = prompt("Kindly enter any number to go back to the main menu: ");
                               break;
   
                                }             
                           
                        case 6: {                       
                                        console.log('\n');
                                        const irregularMens = `
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
                `;
                                        console.log(irregularMens);
       
                                    let dummyButton = prompt("Kindly enter any number to go back to the main menu: ");
                               break;
                                }                    
                    
                case 7: {    
                                console.log('\n');
                                const gynecologist = `
Kindly call or send Dr Justine an email!
=======================================
Phone number: 09021887133
Email: ifedoziennamdi445@gmail.com
=======================================
                `;
                                console.log(gynecologist);
       
                                    let dummyButton = prompt("Kindly enter any number to go back to the main menu: ");
                               break;
                                }
                     
                case 0: {    
                                meNU = false;
                                break;
                                }


                        }
               
               }

