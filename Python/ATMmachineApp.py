from ATMmachineAppFunction import create_account, close_account, deposit, withdraw, show_balance, view_accounts, accounts, change_pin


is_running = True
while is_running:
        
        welcome_text = """
=============================
Welcome to Jstee bank!
=============================
You will be required to make a selection:
1. Create account (with first name, last name and pin).
2. Close account
3. Deposit money
4. Withdraw money
5. Check Account balance
6. Transfer from one account to another.
7. Change Pin.
8. View accounts in the bank
0. Exit
=============================
                                """
        print(welcome_text)


#Driver Class
        import random

        customer_choice = int(input("Make a selection between 1 - 8: "))
        match customer_choice: 
                case 1: 
                        first_name = input("Enter first name: ")
                        last_name = input("Enter last name: ")
                        user_pin = input("Enter your pin: ")
                        card_number = random.randint(1230000000, 50000000000000)
                        create_account(first_name, last_name, user_pin, card_number, balance = 0.0)
                        print("New ATM card Number: ", card_number)
                case 2: 
                        fir_name = input("Enter the first name of the account you wish to close: ")
                        sec_name = input("Enter the last name of the account you wish to close: ")
                        user_pin = input("Enter your pin: ")
                        close_account(fir_name, sec_name, user_pin)
                case 3: 
                        account_name = input("Enter the first name of the account you wish to make a deposit into: ")
                        amount = int(input("Enter deposit amount: "))
                        deposit(account_name, amount)
                case 4: 
                        account_user = input("Enter the name of the account you wish to withdraw from: ")
                        withdraw_amount = int(input("Enter withdraw amount: "))
                        withdraw(account_user, withdraw_amount)
                case 5: 
                        account_name_2 = input("Enter the name of the account you wish to view its balance: ")
                        show_balance(account_name_2)
                case 6: 
                        hh
                        transfer_to_another_account()
                case 7: 
                        acc_name = input("Enter the first name of the account you wish to change its pin: ")
                        old_pin = input("Enter account pin: ")
                        new_pin = input("Enter a new account pin: ")
                        change_pin(acc_name, old_pin, new_pin)
                case 8: 
                        view_accounts()
                case 0:  
                        is_running = False
                case _: 
                        print("Invalid input")

print("Thank you for trusting Banke Bank! Have a nice day!")
