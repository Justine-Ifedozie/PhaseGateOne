const prompt = require("prompt-sync")();

let purchaseDataBase = [];
let quantityDataBase = [];
let priceDataBase = [];
let totalPriceDataBase = [];

menu = true;
while (menu) {

                customerName = prompt("What is the customer's Name? ");

                subMenu = true;
                while (subMenu) {

                userPurchase = prompt("What did the user buy? ");
                purchaseDataBase.push(userPurchase);

                pieces = Number(prompt("How many pieces? "));
                quantityDataBase.push(pieces);

                pricePerUnit = Number(prompt("How much per unit? "));
                priceDataBase.push(pricePerUnit);

                let toTal = pricePerUnit * pieces;
                totalPriceDataBase.push(toTal);

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
        
        for (let count = 0; count < purchaseDataBase.length; count++) {
                console.log(purchaseDataBase[count] + "\t" + "\t    " + quantityDataBase[count] + "\t" + "\t      " + priceDataBase[count] + "\t" + "\t      " + totalPriceDataBase[count]);
                console.log();
                }


        console.log();
        console.log("---------------------------------------------------------------------------");
        
        let sum = 0;
        for (let count = 0; count < purchaseDataBase.length; count++) {
                sum += totalPriceDataBase[count];
        }
        let sumF = sum.toFixed(2);

        console.log("                        \t \t Sub Total: \t" + "\t ", sumF);
        
        let discounT = sum * (discount / 100);
        let discountF = discounT.toFixed(2);
        console.log("\n                        \t \t Discount: \t" + "\t ", discountF);
        
         let vat = sum * (17.50 / 100);
        let vatF = vat.toFixed(2);
         console.log("\n                         \t   VAT  @  17.50: \t" + "\t ", vatF);
        console.log();
        
        console.log("===========================================================================");
        
        let billTotal = sum - discounT + vat;
        let billTotalF = billTotal.toFixed(2);
        console.log("\n                        \t \t Bill Total: \t" + "\t ", billTotalF);
        console.log("\n===========================================================================");
        console.log("THIS IS NOT A RECEIPT, KINDLY PAY   ", billTotalF);
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
        
       for (let count = 0; count < purchaseDataBase.length; count++) {
                console.log(purchaseDataBase[count] + "\t" + "\t    " + quantityDataBase[count] + "\t" + "\t      " + priceDataBase[count] + "\t" + "\t      " + totalPriceDataBase[count]);
                console.log();
                }


        console.log();
        console.log("---------------------------------------------------------------------------");
        
        sum = 0;
        for (let count = 0; count < purchaseDataBase.length; count++) {
                sum += totalPriceDataBase[count];
        }
        
        sumF = sum.toFixed(2);
        console.log("                        \t \t Sub Total: \t" + "\t ", sumF); 
               
        discounT = sum * (discount / 100);
       discountF = discounT.toFixed(2);
       console.log("\n                        \t \t Discount: \t" + "\t ", discountF);
        
        vat = sum * (17.50 / 100);
        vatF = vat.toFixed(2);
        console.log("\n                         \t   VAT  @  17.50: \t" + "\t ", vatF);
        console.log();
        
        console.log("===========================================================================");
        
        billTotal = sum - discounT + vat;
        billTotalF = billTotal.toFixed(2);
        console.log("\n                        \t \t Bill Total: \t" + "\t ", billTotalF);
        
        let paymentF = payment.toFixed(2);
         console.log("\n                        \t \t Amount Paid: \t" + "\t ", paymentF);
         
        let balance = payment - billTotal;
        
        let balanceF = balance.toFixed(2);
        console.log("\n                        \t \t Balance: \t" + "\t ", balanceF);
        console.log("\n===========================================================================");
        console.log("                        THANK YOU FOR YOUR PATRONAGE");
        console.log("===========================================================================");



        let sentinel = Number(prompt("Enter -1 to quit app or any other number to process another transaction: "));
        if (sentinel == -1) menu = false;
                }
        console.log("Shutting Down CheckOut software!");
