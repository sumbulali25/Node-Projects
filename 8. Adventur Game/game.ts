import inquirer from "inquirer";
import chalk from "chalk";

//Classes player and Opponent
class Player{
    name:string;
    fuel:number = 100;
    constructor(name:string) {
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }

}

class Opponent{
    name:string;
    fuel:number = 100;
    constructor(name:string) {
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }

}

//Player Name and Opponent Select
let player = await inquirer.prompt({
    type:"input",
    name:"name",
    message:"Please Enter Your Name:"

})

let opponent = await inquirer.prompt({
    type:"list",
    name:"select",
    message:"Please Select Your Opponent:",
    choices:["Skeleton","Zombie"]

})

//Gather Data
let p1 = new Player(player.name);
let o1 = new Player(opponent.select);

do{
    //Skeleton
if (opponent.select == "Skeleton"){
    let ask = await inquirer.prompt({
        type:"list",
        message:"Select the option",
        name:"option",
        choices:["Attack","Drink Portion","Run For Your Life..."],
    });
    if(ask.option == "Attack"){
        let num = Math.floor(Math.random() * 2);
        if(num == 0){
            o1.fuelDecrease()
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
            if(o1.fuel <= 0){
                console.log(chalk.bold.green.italic("You Win"))
                process.exit()
            }
         }
        if(num == 1){
            p1.fuelDecrease()
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
            if(p1.fuel <= 0){
                console.log(chalk.bold.red.italic("You Loose, Better Luck Next Time"))
                process.exit()
            }
        }
    }
    if(ask.option == "Drink Portion"){
        p1.fuelIncrease()
        console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`))
    }
    if(ask.option == "Run For Your Life..."){
        console.log(chalk.bold.red.italic("You Loose, Better Luck Next Time"))
        process.exit()
    }

}



//Zombie
if (opponent.select == "Zombie"){
    let ask = await inquirer.prompt({
        type:"list",
        message:"Select the option",
        name:"option",
        choices:["Attack","Drink Portion","Run For Your Life..."],
    });
    if(ask.option == "Attack"){
        let num = Math.floor(Math.random() * 2);
        if(num == 0){
            o1.fuelDecrease()
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
            if(o1.fuel <= 0){
                console.log(chalk.bold.green.italic("You Win"))
                process.exit()
            }
         }
        if(num == 1){
            p1.fuelDecrease()
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
            if(p1.fuel <= 0){
                console.log(chalk.bold.red.italic("You Loose, Better Luck Next Time"))
                process.exit()
            }
        }
    }
    if(ask.option == "Drink Portion"){
        p1.fuelIncrease()
        console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`))
    }
    if(ask.option == "Run For Your Life..."){
        console.log(chalk.bold.red.italic("You Loose, Better Luck Next Time"))
        process.exit()
    }

}
}while(true)