public class PersonalityTestFunction {

        public static String personalityDescription(String personality){
                String personalityType = " ";
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


                return personalityType;
        }          



















}