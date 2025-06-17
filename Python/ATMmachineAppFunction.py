accounts = []

def create_account(first_name, last_name, user_pin, card_number, balance = 0.0):
        account = [first_name, last_name, user_pin, card_number, balance]
        accounts.append(account)
        return accounts


def close_account(fir_name, sec_name, user_pin):
        for account in accounts:  
                if account[0] == fir_name and account[1] == sec_name and account[2] == user_pin:
                        accounts.remove(account)
                        print("<<<<<Account closure succesful>>>>>")
                elif account[0] != fir_name or account[1] != sec_name or account[2] != user_pin:
                        print("Invalid Account")


def deposit(name, amount):
        for account in accounts:
                if account[0] == name:
                        account[4] += amount
                        return account
        
def withdraw(first_name, sec_name, user_pin, amount):
        for account in accounts:
                if account[0] == first_name and account[1] == sec_name and account[2] == user_pin:
                        if account[4] >= amount:
                                account[4] = account[4] - amount
                                return account
                        else:
                                return "Insufficient funds"
        
def show_balance(name):
        for account in accounts:
                if account[0] == name:
                        print(f'Your account balance is: ${account[4]}')

def view_accounts():
        print(accounts)          


def change_pin(first_name, old_pin, new_pin):
        for account in accounts:
                if account[0] == first_name and account[2] == old_pin:
                        account[2] = new_pin
                        return account
                else:
                        print("Invalid input!")

def transfer_to_another_account(from_name, to_name, user_pin, amount):
        for account in accounts:
                if account[0] == from_name and account[2] == user_pin:
                        account[4] -= amount
                        print("<<<<<Transfer Successful>>>>>")
                else:
                        print("Invalid Account")
        for account in accounts:
                if account[0] == to_name:
                        account[4] += amount


