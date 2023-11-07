import inquirer from "inquirer";
import faker from "faker";
import chalk from "chalk";

//Requirement
//Users data = done
//Atm machine = done
//Atm functions

//USERS DATA

interface User {
    id: number
    pin:number
    name:string
    accountNumber:number
    balance:number
};

const createUser =()=>{
    let users:User[] = [];

    for(let i=0;i<11;i++){

        let user:User = {
            id:i,
            pin:1000 + i,
            name:faker.person.fullName(),
            accountNumber:Math.floor(100000000 * Math.random() * 900000000), 
            balance:1000000 * i,
        }

        users.push(user);

    }

    return users;
};

//ATM Machine

const atmMachine = async (users:User[])=>{

    const response = await inquirer.prompt({
        type:"number",
        message:"Write Pin Code",
        name:"Pin"

    })

    const user = users.find(value => value.pin == response.Pin)

    if(user){
        console.log(chalk.bold.blueBright(`Welcome ${user.name}`));
        atmFunction(user);
        return;
    }
    else{
        console.log(chalk.bold.redBright("Invalid User Pin"));
    }

    console.log(response);


};


//ATM Function

const atmFunction = async (user:User)=>{
    const answer = await inquirer.prompt({
        type: "list",
        name:"Select",
        choices:["Withdraw","Balance Check","Exit"]
    })

    if(answer.Select == "Withdraw"){
        const amount = await inquirer.prompt({
            type:"number",
            message:"Enter Amount.",
            name: "Rupee"
        })

        if(amount.Rupee > user.balance){
            return console.log(chalk.bold.grey("Insufficient Balance"))
        }
        
        console.log(chalk.bold.greenBright(`Withdraw: ${amount.Rupee}`))
        console.log(chalk.bold.yellowBright(`Balance: ${user.balance - amount.Rupee}`))

    }
    if (answer.Select === "Balance Check"){
        console.log(chalk.bold.greenBright(`Balance: ${user.balance}`))
        return
    }
    if(answer.Select == "Exit"){
        console.log(chalk.bold.redBright("THANK YOU!"));
    }
};

const users = createUser();
atmMachine(users);