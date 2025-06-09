from datetime import datetime, timedelta
from menstrualFunctions import calculateMensCycle, calculateFlowDates

cycleLength = 0
array = [cycleLength]

            
meNU = True
while meNU:

        mainMenu = """
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
=============================
                """

        print(mainMenu)
        menu = int(input("Press a number to make a selection between 0 - 7: "))

        if menu < 0 or menu > 7:
                print("You entered an invalid option!! Kindly try again or press 0 for Yoruba")
                menu = int(input("Press a number to make a selection between 0 - 7: "))

       
        match menu:
                case 1:
                        print("\n")
                        print("Calculate the Length of your menstrual cycle")
                        name = input("What is your name? ")
                                                          
                        userdate1 = input("Enter the start date of your previous two periods (yyyy-mm-dd): ")
                        userdate2 = input("Enter the start date of your last periods (yyyy-mm-dd): ")
     
                        cycleLength = calculateMensCycle(userdate1, userdate2)

                        print("\n")
                        print(name, ", your menstrual cycle length is ", cycleLength, " days")
                                
                        number = input("Kindly enter any number to go back to the main menu: ")

                case 2:
                        name = input("What is your name? ")

                        periodDays = int(input("How many days does your period last? "))
                        lastPeriodDate = input("Enter the start date of your last period (yyyy-mm-dd): ")
                        cycleLengthDays = int(input("How long is your menstrual cycle in days (example - 28)? "))

                        newMensDate1, newFlowLength = calculateFlowDates(periodDays, cycleLengthDays, lastPeriodDate)
                        print(name, ", your next period will be on: ", newMensDate1.strftime('%Y-%m-%d'),  " and continue till: ",  newFlowLength.strftime('%Y-%m-%d'))
                        
                        print("\n")
                        number = input("Kindly enter any number to go back to the main menu: ")
                                
                case 3:   
                        shortCycle2 = int(input("What is the length of your shortest cycle? "))
                        longCycle2 = int(input("What is the length of your shortest cycle? "))
                        lastPeriodDate = input("Enter the start date of your recent period (yyyy-mm-dd): ")

                        #menstrualFunctions.calculateSafeDays(shortCycle2, longCycle2, lastPeriodDate)
                        print("\n")

                        number = input("Kindly enter any number to go back to the main menu: ")   
                                
                case 4:
                        averageCycle2 = int(input("What is the length of your average cycle? "))

                        lastPeriodDate = input("Enter the start date of your immediate past period (yyyy-mm-dd): ")

                        #menstrualFunctions.calculateOvulation(averageCycle2, lastPeriodDate)
                        print("\n")

                        number = input("Kindly enter any number to go back to the main menu: ")         
                                
                case 5:  
                        print("\n")
                        painfulTips = """
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
                """
                        print(painfulTips)
       
                        number = input("Kindly enter any number to go back to the main menu: ")           
                           
                case 6:                   
                        print("\n")
                        irregularMens = """
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
                """
                        print(irregularMens)
       
                        number = input("Kindly enter any number to go back to the main menu: ")                
                    
                case 7:
                        print("\n")
                        gynecologist = """
Kindly call or send Dr Justine an email!
=======================================
Phone number: 09021887133
Email: ifedoziennamdi445@gmail.com
=======================================
                """
                        print(gynecologist)
       
                        number = input("Kindly enter any number to go back to the main menu: ")
                     
                case 0:   
                        meNU = False;
print("Have a nice day!")