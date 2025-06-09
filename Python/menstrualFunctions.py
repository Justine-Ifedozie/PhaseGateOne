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

                

