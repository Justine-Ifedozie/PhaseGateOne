import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

public class menstrualFunctions {

        public static long calculateMensCycle(String firstOldPeriod, String newPeriod) {
              DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd"); 
               
              LocalDate dateOne = LocalDate.parse(firstOldPeriod, formatter);
              LocalDate dateTwo = LocalDate.parse(newPeriod, formatter);  
                long daysDifference = ChronoUnit.DAYS.between(dateOne, dateTwo);
                return daysDifference;
        }

        public static void calculateFlowDays(int flowLength, int menstCycle, String newPeriod) {
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
                LocalDate  mensDate = LocalDate.parse(newPeriod, formatter);

                //LocalDate newMensDate = mensDate.plusDays(flowLength);

                for (int count = 0; count < flowLength; count++){
                System.out.print(LocalDate newMensDate = mensDate.plusDays(flowLength);
                }
        }
        








}