accounts = []

def create_account(name, phone, account_number, balance = 0.0):
        account = [name, phone, account_number, balance]
        accounts.append(account)
        return accounts

def deposit(name, amount):
        for account in accounts:
                if account[0] == name:
                        account[3] += amount
                        return account
        
def withdraw(name, amount):
        for account in accounts:
                if account[0] == name:
                        if account[3] >= amount:
                                account[3] = account[3] - amount
                                return account
                        else:
                                return "Insufficient funds"
        
def show_balance(name):
        for account in accounts:
                if account[0] == name:
                        print(f'Your account balance is: ${account[3]}')

def view_accounts():
        print(accounts)               