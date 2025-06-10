const prompt = require("prompt-sync")();

let purchaseDataBase = [];
let quantityDataBase = [];
let purchaseDataBase = [];

menu = true;
while (menu) {

                customerName = prompt("What is the customer's Name? ");

                subMenu = true;
                while (subMenu) {

                userPurchase = Number(prompt("What did the user buy? "));
                purchaseDataBase.push(userPurchase);

                pieces = Number(prompt("How many pieces? "));
                quantityDataBase.push(pieces);

                pricePerUnit = Number(prompt("How much per unit? "));
                dataBase.push(pricePerUnit);

                let toTal = pricePerUnit * pieces;
                dataBase.push(toTal);

                addMoreItems = prompt("Add more Items? ");

                if (addMoreItems.toLowerCase() == "yes") subMenu = true;

                else if (addMoreItems.toLowerCase() == "no") subMenu = false;
                }
        
        cashierName = prompt("What is your name? ");

        discount = Number(prompt("How much discount will he get? "));

mainMenu = `
JUSTINE STORES
MAIN BRANCH
LOCATION: 312, HERBERT MACAULAY WAY, SABO YABA, LAGOS.
TEL: 09021887133
                `
        console.log(mainMenu);

        const presentDate = new Date();
        console.log(presentDate);
        console.log("Cashier: " + cashierName);
        console.log("Customer Name : " + customerName);
        console.log("===========================================================================");
        console.log("ITEM                QTY                PRICE                TOTAL (NGN) ");
        console.log("---------------------------------------------------------------------------");
        
        for (let count = 0; count < dataBase.length; count++) {
                console.log(items.get(count) + "\t" + "\t    " + quantity.get(count) + "\t" + "\t      " + pricee.get(count) + "\t" + "\t      " + total.get(count));
                console.log();
                }


        console.log();
        console.log("---------------------------------------------------------------------------");
        
        const sum = 0;
        for (let count = 0; count < dataBase.length; count++) {
                sum += total.get(count);
        }

        console.log("                        \t \t Sub Total: \t" + "\t %.2f", sum);
        
        const discounT = sum * (discount / 100);
        console.log("\n                        \t \t Discount: \t" + "\t %.2f ", discounT);
        
        const vat = sum * (17.50 / 100);
         console.log("\n                         \t   VAT  @  17.50: \t" + "\t %.2f", vat);
        console.log();
        
        console.log("===========================================================================");
        
        const billTotal = sum - discounT + vat;
        console.log("\n                        \t \t Bill Total: \t" + "\t %.2f", billTotal);
        console.log("\n===========================================================================");
        console.log("THIS IS NOT A RECEIPT, KINDLY PAY   %.2f", billTotal);
        console.log("\n===========================================================================");

        console.log();
        console.log();

        payment = Number(prompt("How much did the customer give to you? "));

        console.log();
        console.log();

mainMenu1 = `
JUSTINE STORES
MAIN BRANCH
LOCATION: 312, HERBERT MACAULAY WAY, SABO YABA, LAGOS.
TEL: 09021887133
                `
        console.log(mainMenu1);

        console.log(presentDate);
        console.log("Cashier: " + cashierName);
        console.log("Customer Name : " + customerName);
        console.log("===========================================================================");
        console.log("ITEM                QTY                PRICE                TOTAL (NGN) ");
        console.log("---------------------------------------------------------------------------");
        
        for (let count = 0; count < items.size(); count++) {
                console.log(items.get(count) + "\t" + "\t    " + quantity.get(count) + "\t" + "\t      " + pricee.get(count) + "\t" + "\t      " + total.get(count));
                console.log();
                }


        console.log();
        console.log("---------------------------------------------------------------------------");
        
        sum = 0;
        for (count = 0; count < total.size(); count++) {
                sum += total.get(count);
        }

        console.log("                        \t \t Sub Total: \t" + "\t %.2f", sum);
        
        discounT = sum * (discount / 100);
        console.log("\n                        \t \t Discount: \t" + "\t %.2f ", discounT);
        
         vat = sum * (17.50 / 100);
         console.log("\n                         \t   VAT  @  17.50: \t" + "\t %.2f", vat);
        console.log();
        
        console.log("===========================================================================");
        
        billTotal = sum - discounT + vat;
        console.log("\n                        \t \t Bill Total: \t" + "\t %.2f", billTotal);
         console.log("\n                        \t \t Amount Paid: \t" + "\t %.2f", payment);
         
        let balance = payment - billTotal;
        console.log("\n                        \t \t Balance: \t" + "\t %.2f", balance);
        console.log("\n===========================================================================");
        console.log("                        THANK YOU FOR YOUR PATRONAGE");
        console.log("===========================================================================");



        let sentinel = Number(prompt("Enter -1 to quit app or any other number to process another transaction: "));
        if (sentinel == -1) menu = false;
                }
        console.log("Shutting Down CheckOut software!");
