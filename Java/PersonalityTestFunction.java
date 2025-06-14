import java.util.ArrayList;

public class PersonalityTestFunction {
        ArrayList<String>selectionDataBase = new ArrayList<>();

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
ENTJ (Commander) is a personality type with the Extraverted, Intuitive, Thinking, and Judging traits. They are decisive people who love momentum and accomplishment. They gather information to construct their creative visions but rarely hesitate for long before acting on them.
                                                        """;
                }


                return personalityType;
        }          



















}