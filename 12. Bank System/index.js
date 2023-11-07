import { faker } from "@faker-js/faker";
import chalk from "chalk";
import inquirer from "inquirer";
class Customer {
    constructor(fName, lName, age, gender, cellNum, accountNum) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.gender = gender;
        this.mobNumber = cellNum;
        this.accNumber = accountNum;
    }
}
class Bank {
    constructor() {
        this.customer = [];
        this.account = [];
    }
    addCustomer(obj) {
        this.customer.push(obj);
    }
    addAccountNum(obj) {
        this.account.push(obj);
    }
    transaction(accobj) {
        let NewAccounts = this.account.filter(acc => acc.accNumber !== accobj.accNumber);
        this.account = [...NewAccounts, accobj];
    }
}
let myPBank = new Bank();
for (let a = 1; a <= 5; a++) {
    let fName = faker.person.firstName("male");
    let lName = faker.person.lastName("male");
    let num = parseInt(faker.phone.number());
    const cus = new Customer(fName, lName, 25 * a, "male", num, 1000 + a);
    myPBank.addCustomer(cus);
    myPBank.addAccountNum({ accNumber: cus.accNumber, balance: 1000 * a });
}
async function BankService(Bank) {
    let service = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "Please select the system",
        choices: ["View Balance", "Cash Withdraw", "Cash Deposit"],
    });
    if (service.select == "View Balance") {
        let res = await inquirer.prompt({
            type: "input",
            name: "number",
            message: "Please Select the Account Number",
        });
        let account = myPBank.account.find((acc) => acc.accNumber == res.number);
        if (!account) {
            console.log(chalk.red.bold("Invalid Account Number"));
        }
        if (account) {
            let name = myPBank.customer.find((item) => item.accNumber == account?.accNumber);
            console.log(`Dear ${chalk.green.bold(name?.firstName)} ${chalk.green.bold(name?.lastName)} Your Account Balance is ${chalk.bold.blueBright("$", account.balance)}`);
        }
        if (service.select == "Cash Withdraw") {
            let res = await inquirer.prompt({
                type: "input",
                name: "number",
                message: "Please Select the Account Number",
            });
            let account = myPBank.account.find((acc) => acc.accNumber == res.number);
        }
        if (!account) {
            console.log(chalk.red.bold("Invalid Account Number"));
        }
        if (account) {
            let ans = await inquirer.prompt({
                type: "number",
                message: "Please Enter your Cash Amount.",
                name: "rupee",
            });
            let newBalance = account.balance - ans.rupee;
            Bank.transaction({ accNumber: account.accNumber, balance: newBalance });
        }
        if (service.select == "Cash Deposit") {
            {
                let res = await inquirer.prompt({
                    type: "input",
                    name: "number",
                    message: "Please Select the Account Number",
                });
                let account = myPBank.account.find((acc) => acc.accNumber == res.number);
            }
            if (!account) {
                console.log(chalk.red.bold("Invalid Account Number"));
            }
            if (account) {
                let ans = await inquirer.prompt({
                    type: "number",
                    message: "Please Enter your Cash Amount.",
                    name: "rupee",
                });
                let newBalance = account.balance + ans.rupee;
                Bank.transaction({ accNumber: account.accNumber, balance: newBalance });
            }
        }
    }
}
BankService(myPBank);
