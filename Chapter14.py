class BankAccount:
    def __init__(self, name, number, money):
        self.accountname = str(name)
        self.accountnumber = int(number)
        self.money = float(money)
    def show(self):
        msg = "Dear " + self.accountname + ", your account " + str(self.accountnumber) + " has " + str(self.money) + " remains."
        print(msg)
    def add(self, addamount):
        self.money = self.money + addamount
        print("Add successfully.")
    def withdraw(self, amount):
        self.money = self.money - amount
        print("Withdraw successfully.")

class InterestAccount(BankAccount):
    def __init__(self, ratio):
        BankAccount.__init__(self, "Em", "24680", 210.54)  #在子类中直接定义母类里的属性
        self.radio = float(ratio)
    def ratio(self, year):
        self.money = self.money*(1 + self.radio)**year


myaccount = BankAccount("Oz", 13579, 120.35)
myaccount.show()
myaccount.add(100.35)
myaccount.show()
myaccount.withdraw(150.78)
myaccount.show()

youraccount = InterestAccount(0.1)
youraccount.show()
youraccount.add(100.35)
youraccount.show()
youraccount.withdraw(150.78)
youraccount.show()
youraccount.ratio(5)
youraccount.show()
