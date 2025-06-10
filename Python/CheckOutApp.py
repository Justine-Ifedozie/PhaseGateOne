import datetime

items = []
quantity = []
pricee = []
total = []

menu = True
while (menu):

        customerName = input("What is the customer's Name? ")

        subMenu = True
        while subMenu:
                userPurchase = input("What did the user buy? ")
                items.append(userPurchase)

                pieces = int(input("How many pieces? "))
                quantity.append(pieces)

                pricePerUnit = float(input("How much per unit? "))
                pricee.append(pricePerUnit)

                toTal = float(pricePerUnit * pieces)
                total.append(toTal)

                addMoreItems = input("Add more Items? ")
                if addMoreItems.lower() == "yes":
                        subMenu = True

                elif addMoreItems.lower() == "no":
                        subMenu = False

        
        cashierName = input("What is your name? ")

        discount = int(input("How much discount will he get? "))

        mainMenu = """
JUSTINE STORES
MAIN BRANCH
LOCATION: 312, HERBERT MACAULAY WAY, SABO YABA, LAGOS.
TEL: 09021887133
                """
        print(mainMenu)

        today = datetime.date.today()
        print(today)

        print("Cashier: ",  cashierName)
        print("Customer Name : ", customerName)
        print("===========================================================================")
        print("ITEM                QTY                PRICE                TOTAL (NGN) ")
        print("---------------------------------------------------------------------------")
        
        for item1, item2, item3, item4 in zip(items, quantity, pricee, total):
                print(f"{item1} \t \t \t {item2} \t \t  {item3} \t \t {item4}")
                print()



        print()
        print("---------------------------------------------------------------------------")
        
        sum = 0
        for totals in total:
                sum += totals

        print(f"                        \t \t Sub Total: \t  \t  {sum}");
        
        discounT = float(sum * (discount / 100))
        print(f"\n                        \t \t Discount: \t + \t {discounT:.2f}")
        
        vat = float(sum * (17.50 / 100))
        print(f"\n                         \t   VAT  @  17.50: \t + \t  {vat:.2f}")
        print()
        
        print("===========================================================================")
        
        billTotal = float(sum - discounT + vat)
        print(f"\n                        \t \t Bill Total: \t + \t  {billTotal:.2f}")
        print("\n===========================================================================")
        print(f"THIS IS NOT A RECEIPT, KINDLY PAY   {billTotal:.2f}")
        print("\n===========================================================================")

        print()
        print()

        payment = int(input("How much did the customer give to you? "))

        print()
        print()

        mainMenu1 = """
JUSTINE STORES
MAIN BRANCH
LOCATION: 312, HERBERT MACAULAY WAY, SABO YABA, LAGOS.
TEL: 09021887133
                """
        print(mainMenu1)

        today = datetime.date.today()
        print(today)
        
        print("Cashier: " + cashierName)
        print("Customer Name : " + customerName)
        print("===========================================================================")
        print("ITEM                QTY                PRICE                TOTAL (NGN) ")
        print("---------------------------------------------------------------------------")
        
        for item1, item2, item3 in zip(items, quantity, pricee):
                print(f"{item1} \t \t \t {item2} \t \t  {item3} \t \t {item4}")
                print()


        print();
        print("---------------------------------------------------------------------------");
        
        sum = 0
        for totals in total:
                sum += totals

        
        print(f"                        \t \t Sub Total: \t  \t  {sum}");
        
        discounT = float(sum * (discount / 100))
        print(f"\n                        \t \t Discount: \t + \t {discounT:.2f}")
        
        vat = float(sum * (17.50 / 100))
        print(f"\n                         \t   VAT  @  17.50: \t + \t  {vat:.2f}")
        print()
        
        print("===========================================================================")
        
        billTotal = sum - discounT + vat;
        print(f"\n                        \t \t Bill Total: \t \t  {billTotal:.2f}")
        print(f"\n                        \t \t Amount Paid: \t \t  {payment}")
         
        balance = float(payment - billTotal)
        print(f"\n                        \t \t Balance: \t \t {balance:.2f}")
        print("\n===========================================================================")
        print("                        THANK YOU FOR YOUR PATRONAGE")
        print("===========================================================================")



        sentinel = int(input("Enter -1 to quit app or any other number to process another transaction: "))
        if sentinel == -1:
                menu = False

print("Shutting Down CheckOut software!")
