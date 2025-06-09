import menstrualFunctions
from datetime import datetime, timedelta
from unittest import TestCase

class TestMenstrualFunctions(TestCase):

        format = "%Y-%m-%d"
        
        def test_that_calculate_Mens_Cycle_exists(self):
                a = "2025-03-01 "
                b = "2025-03-01 "
                lastPeriod = datetime.strptime(a, format)
                lastPeriod1 = datetime.strptime(b, format)
                menstrualFunctions.calculateMensCycle(lastPeriod, 2025-3-1)

        def test_that_calculate_Mens_Cycle_returns_result_correctly(self):
                actual = menstrualFunctions.calculateMensCycle()
                expected = 28
                self.assertEqual(actual, expected)

