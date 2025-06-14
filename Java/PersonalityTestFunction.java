public class PersonalityTestFunction {

        public static String personalityDescription(String personal){
                String personalityType = " ";
               
               String personality = personal.trim();
               
                if (personality.equals("INTJ")){
                        personalityType = """
Architect 
INTJ Personality is a personality type with the Introverted, 
Intuitive, Thinking, and Judging traits. These thoughtful 
tacticians love perfecting the details of life, applying creativity 
and rationality to everything they do. Their inner world is often 
a private, complex one.   
                                                        """;
                }
           else if (personality.equals("INTP")){
                        personalityType = """
Logician
INTP (Logician) is a personality type with the Introverted, 
Intuitive, Thinking, and Prospecting traits. These flexible thinkers 
enjoy taking an unconventional approach to many aspects of life. 
They often seek out unlikely paths, mixing willingness to 
experiment with personal creativity.
                                                        """;
                }
           else if (personality.equals("ENTJ")){
                        personalityType = """
Commander
ENTJ (Commander) is a personality type with the Extraverted, 
Intuitive, Thinking, and Judging traits. They are decisive people 
who love momentum and accomplishment. They gather information 
to construct their creative visions but rarely hesitate for long before 
acting on them.
                                                        """;
                }
           else if (personality.equals("ENTP")){
                        personalityType = """
Debater
ENTP (Debater) is a personality type with the Extraverted, Intuitive, 
Thinking, and Prospecting traits. They tend to be bold and creative, 
deconstructing and rebuilding ideas with great mental agility. 
They pursue their goals vigorously despite any resistance they might 
encounter.
                                                        """;
                }
           else if (personality.equals("INFJ")){
                        personalityType = """
Advocate
INFJ (Advocate) is a personality type with the Introverted, Intuitive, 
Feeling, and Judging traits. They tend to approach life with deep 
thoughtfulness and imagination. Their inner vision, personal values, 
and a quiet, principled version of humanism guide them in all things.
                                                        """;
                }
           else if (personality.equals("INFP")){
                        personalityType = """
Mediator
INFP (Mediator) is a personality type with the Introverted, Intuitive, 
Feeling, and Prospecting traits. These rare personality types tend to 
be quiet, open-minded, and imaginative, and they apply a caring and 
creative approach to everything they do.   
                                                        """;
                }
           else if (personality.equals("ENFJ")){
                        personalityType = """
Protagonist
ENFJ (Protagonist) is a personality type with the Extraverted, Intuitive, 
Feeling, and Judging traits. These warm, forthright types love helping 
others, and they tend to have strong ideas and values. 
They back their perspective with the creative energy to achieve their goals.
                                                        """;
                }
           else if (personality.equals("ENFP")){
                        personalityType = """
Campaigner
ENFP (Campaigner) is a personality type with the Extraverted, Intuitive, 
Feeling, and Prospecting traits. These people tend to embrace big ideas 
and actions that reflect their sense of hope and goodwill toward others. 
Their vibrant energy can flow in many directions.
                                                        """;
                }
           else if (personality.equals("ISTJ")){
                        personalityType = """
Logistician
ISTJ (Logistician) is a personality type with the Introverted, Observant, 
Thinking, and Judging traits. These people tend to be reserved yet willful, 
with a rational outlook on life. They compose their actions carefully and 
carry them out with methodical purpose.
                                                        """;
                }
           else if (personality.equals("ISFJ")){
                        personalityType = """
Defender
ISFJ (Defender) is a personality type with the Introverted, Observant, 
Feeling, and Judging traits. These people tend to be warm and 
unassuming in their own steady way. They’re efficient and responsible, 
giving careful attention to practical details in their daily lives.
                                                        """;
                }
           else if (personality.equals("ESTJ")){
                        personalityType = """
Executive
ESTJ (Executive) is a personality type with the Extraverted, Observant, 
Thinking, and Judging traits. They possess great fortitude, emphatically 
following their own sensible judgment. They often serve as a stabilizing 
force among others, able to offer solid direction amid adversity.
                                                        """;
                }




        
                
                
                
                
                
        else{
                personalityType = "Invalid Input";
                }

                return personalityType;
        }          

}