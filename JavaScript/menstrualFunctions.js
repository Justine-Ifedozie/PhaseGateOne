
        function calculateFlowDays(String name, int flowLength, int menstCycle, String newPeriod) {
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
                LocalDate  mensDate = LocalDate.parse(newPeriod, formatter);
                LocalDate newMensDate1 = mensDate.plusDays(menstCycle);

                for (int count = 1; count < flowLength + 1; count++){
                        LocalDate newMensDate2 = newMensDate1.plusDays(count);
                        System.out.print(name + ", your next period will be on - Day " + count + ": "+ newMensDate2);
                        System.out.println();
                }
        }
        
        function calculateFlowDates(String name, int flowLength, int CycleLength, String lastPeriodDate) {
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
                LocalDate  mensDate = LocalDate.parse(lastPeriodDate, formatter);
                LocalDate newMensDate1 = mensDate.plusDays(CycleLength);

                for (int count = 1; count < flowLength + 1; count++){
                        LocalDate newMensDate2 = newMensDate1.plusDays(count);
                        System.out.print(name + ", your next period will be on - Day " + count + ": "+ newMensDate2);
                        System.out.println();
              }
      }

        public static void calculateSafeDays(int shortCycle2, int longCycle2, String lastPeriodDate) {
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
                LocalDate  mensDate = LocalDate.parse(lastPeriodDate, formatter);

                int newShortCycle = shortCycle2 - 18;
                int newLongCycle = longCycle2 - 11;
                
                        LocalDate firstFertileDate = mensDate.plusDays(newShortCycle - 2); 
                        System.out.print("Your safe day before your fertile window is from: " + mensDate + " until " + firstFertileDate);
                        System.out.println();
                
                        LocalDate secFertileDate = mensDate.plusDays(newLongCycle);
                        System.out.print("Your safe days after fertile window is from: " + secFertileDate +  " until your next period start");
                        System.out.println();
                }

        public static void calculateOvulation(int averageCycle2, String lastPeriodDate){
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
                LocalDate  mensDate = LocalDate.parse(lastPeriodDate, formatter);
                LocalDate nextPeriodDate = mensDate.plusDays(averageCycle2);
        
                LocalDate ovulationDay = nextPeriodDate.minusDays(14);
                System.out.print("Your ovulation day is: " + ovulationDay);

                System.out.println();

                LocalDate fertileWindow = ovulationDay.minusDays(5);
                System.out.print("Your fertile window is: " + fertileWindow + " until " + ovulationDay);
                System.out.println();
        }
