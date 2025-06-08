const prompt = require("prompt-sync")();

function calculateMensCycle(firstOldPeriod, newPeriod) {
        const oldPeriod = new Date(firstOldPeriod);
       const firstNewPeriod = new Date(newPeriod);
       const newdate = firstNewPeriod.getTime() - oldPeriod.getTime();
        const aDay = 1000 * 60 * 60 * 24;
        const days = parseInt(newdate / aDay); 
        return days;
        };

function calculateFlowDays(name, flowLength, menstCycle, newPeriod) {
        const 
        
        LocalDate  mensDate = LocalDate.parse(newPeriod, formatter);
        LocalDate newMensDate1 = mensDate.plusDays(menstCycle);

                for (int count = 1; count < flowLength + 1; count++){
                        LocalDate newMensDate2 = newMensDate1.plusDays(count);
                        System.out.print(name + ", your next period will be on - Day " + count + ": "+ newMensDate2);
                        System.out.println();
                }
        }




let cycleLength = 0
let userdate2 = " "
let name = " "
let array = [cycleLength]

            
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
                                array[0] = cycleLength;
                                console.log('\n');
                                console.log(name + ", your menstrual cycle length is: " + cycleLength + " days");
                                
                                let dummyButton = prompt("Kindly enter any number to go back to the main menu: ");
                                break;
                              }  

                case 2: { 
                                let userResponse = prompt('Have you used our app to calculate your menstrual cycle length (yes/no)?  ')
                                
                                if (userResponse.equalsIgnoreCase("yes")){
                                        let flowLength = Number(prompt('How many days does your period last? '))
                                        
                                        
                                        let menstCycle = (array[0]);

                                        calculateFlowDays(name, flowLength, menstCycle, userdate2);
                                              let dummyButton = prompt("Kindly enter any number to go back to the main menu: ");
                                          break;
                            }
                                else if (userResponse.equalsIgnoreCase("no")){
                                             name = prompt('What is your name? ')
                                             
                                        let flowLength = Number(prompt('How many days does your period last? '))

                                        let lastPeriodDate = prompt('Enter the start date of your last period (yyyy-mm-dd): ')

                                        let CycleLength = Number(prompt('How long is your menstrual cycle in days (example - 28)? '))

                                        menstrualFunctions.calculateFlowDates(name, flowLength, CycleLength, lastPeriodDate);
                                        console.log('\n');

                                              let dummyButton = prompt("Kindly enter any number to go back to the main menu: ");
                                        break;
                                        }
                                else{
                                        console.log("Invalid response!");
                                              let dummyButton = prompt("Kindly enter any number to go back to the main menu: ");
                                        break;
                                        }
                                }
                                
                case 3: {      
                                let shortCycle2 = Number(prompt('What is the length of your shortest cycle? '))

                                let longCycle2 = Number(prompt('What is the length of your longest cycle? '))

                                let lastPeriodDate = prompt('Enter the start date of your recent period (yyyy-mm-dd): ')

                                menstrualFunctions.calculateSafeDays(shortCycle2, longCycle2, lastPeriodDate);
                                console.log('\n');

                                     let dummyButton = prompt("Kindly enter any number to go back to the main menu: ");
                                break;
                                }     
                                
                case 4: {      
                                let averageCycle2 = Number(prompt('What is the length of your average cycle? '))

                                let lastPeriodDate = prompt('Enter the start date of your immediate past period (yyyy-mm-dd): ')

                                menstrualFunctions.calculateOvulation(averageCycle2, lastPeriodDate);
                                console.log('\n');

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

