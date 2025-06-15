from PersonalityTestFunction import personalityDescription
   
selectionDataBase = []
selectedQuestions = []
sensingIntuitive = []
thinkingFeeling = []
judgingPerception = []

personality = " "
        
arrayQuestions = [["A. Expend energy, enjoy groups", "B. Conserve energy, enjoy one-on-one"],
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


name = input("What is your name? ")

print()
        
print("Welcome to MBTI Personality Test!")
print("You'll be presented with 20 questions categorized into 4 sections, kindly select the one that resonates with you more.")
print("<<<<<<Section One: Extroverted E vs Introverted I>>>>>>")
print("Pick A or B for each questions.")

print()
        
for questions in arrayQuestions[::4]:
        print(questions)
        userSelection = " "
        while True:
                userSelection1 = input("")
                userSelection = userSelection1.upper()
       
                if userSelection == "A" or userSelection == "B":
                        selectionDataBase.append(userSelection)
                        break
                else:
                        print("Expected A or B as Response \n I know this is an error, Please retry again")

aCount = 0
bCount = 0
for items in selectionDataBase:
        if items == "A":
                aCount+= 1
        else:
                bCount+= 1
       
if aCount > bCount:
        personality += "E"
else:
        personality += "I"

  #For the second group of question.
print()

for questions in arrayQuestions[1::4]:
        print(questions)
        userSelection = " "
        while True:
                userSelection1 = input("")
                userSelection = userSelection1.upper()
       
                if userSelection == "A" or userSelection == "B":
                        sensingIntuitive.append(userSelection)
                        break
                else:
                        print("Expected A or B as Response \n I know this is an error, Please retry again")

secACount = 0
secBCount = 0

for items in sensingIntuitive:
        if items == "A":
                secACount+= 1
        else:
                secBCount+= 1

if secACount > secBCount:
        personality += "S"
else:
        personality += "N"


#For the third group of question.

print()

for questions in arrayQuestions[2::4]:
        print(questions)
        userSelection = " "
        while True:
                userSelection1 = input("")
                userSelection = userSelection1.upper()
       
                if userSelection == "A" or userSelection == "B":
                        thinkingFeeling.append(userSelection)
                        break
                else:
                        print("Expected A or B as Response \n I know this is an error, Please retry again")

thirdACount = 0
thirdBCount = 0

for items in thinkingFeeling:
        if items == "A":
                thirdACount+= 1
        else:
                thirdBCount+= 1

if thirdACount > thirdBCount:
        personality += "T"
else:
        personality += "F"


#For the fourth group of question.

print()

for questions in arrayQuestions[3::4]:
        print(questions)
        userSelection = " "
        while True:
                userSelection1 = input("")
                userSelection = userSelection1.upper()
       
                if userSelection == "A" or userSelection == "B":
                        judgingPerception.append(userSelection)
                        break
                else:
                        print("Expected A or B as Response \n I know this is an error, Please retry again")

fourthACount = 0
fourthBCount = 0

for items in thinkingFeeling:
        if items == "A":
                fourthACount+= 1
        else:
                fourthBCount+= 1

if fourthACount > fourthBCount:
        personality += "J"
else:
        personality += "P"

        
#First set of question print out
print("Hello " + name + " You selected ")
      
for count in range (0, len(arrayQuestions), 4):
        for items in selectionDataBase:
                if items == "A":
                        print(arrayQuestions[count][0])
                else:
                        print(arrayQuestions[count][1])

print()
      
print("Number of A selected: " + aCount)
print("Number of  B selected: " + bCount)

#Second set of question print out
print()

for count in range (1, len(arrayQuestions), 4):
        for items in sensingIntuitive:
                if items == "A":
                        print(arrayQuestions[count][0])
                else:
                        print(arrayQuestions[count][1])
print()

print("Number of A selected: " + secACount)
print("Number of  B selected: " +secBCount)

#Third set of question print out
print()
      
for count in range (2, len(arrayQuestions), 4):
        for items in thinkingFeeling:
                if items == "A":
                        print(arrayQuestions[count][0])
                else:
                        print(arrayQuestions[count][1])
print()
      
print("Number of A selected: " + thirdACount)
print("Number of  B selected: " +thirdBCount)

#Fourth set of question print out
print()

for count in range (2, len(arrayQuestions), 4):
        for items in judgingPerception:
                if items == "A":
                        print(arrayQuestions[count][0])
                else:
                        print(arrayQuestions[count][1])
print()
            
print("Number of A selected: " + fourthACount)
print("Number of  B selected: " + fourthBCount)

print()

print("Your personality is: " + personality)

personalityDisplay = personalityDescription(personality)

print(personalityDisplay)
