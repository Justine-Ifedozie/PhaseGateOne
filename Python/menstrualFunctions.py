from datetime import datetime, timedelta

format = "%Y-%m-%d"

def calculateMensCycle(firstOldPeriod, newPeriod1):
        oldPeriod = datetime.strptime(firstOldPeriod, format)
        newPeriod = datetime.strptime(newPeriod1, format)
        date_difference = newPeriod - oldPeriod
        return date_difference

def calculateFlowDates(flowLength, CycleLength, lastPeriodDate):
        lastPeriod = datetime.strptime(lastPeriodDate, format)
        add_CycleLength = timedelta(days = CycleLength + 1)
        newMensDate1 = lastPeriod + add_CycleLength
        add_flowLength = timedelta(days = flowLength - 1)
        newFlowLength = newMensDate1 + add_flowLength
        return newMensDate1, newFlowLength

def calculateSafeDays(shortCycle2, longCycle2, lastPeriodDate):
        lastPeriod = datetime.strptime(lastPeriodDate, format)
        addShortCycle2 = timedelta(days = shortCycle2 - 18 - 2)
        addLongCycle2 = timedelta(days = longCycle2 - 11)
        firstFertileDate = lastPeriod + addShortCycle2
        lastPeriod2 = datetime.strptime(lastPeriodDate, format)
        secFertileDate = lastPeriod2 + addLongCycle2
        return firstFertileDate, secFertileDate, lastPeriod


    

