import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
public class MenstruationTest {

        @Test
        public void testThat_calculateMensCycle_returnsCorrectly() {
                menstrualFunctions mens = new menstrualFunctions();
                String firstOldPeriod = "2025-05-12";
                String newPeriod = "2025-06-09";
                long actual = mens.calculateMensCycle(firstOldPeriod, newPeriod);
                long expected = 28;
                assertEquals(actual, expected);
        
        }


}