import chalk from "chalk";
import inquirer from "inquirer";
let genNum = Math.floor(Math.random() * 11);
let user = await inquirer.prompt({
    name: "numb1",
    type: "list",
    message: "Please Select the Number: ",
    choices: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
});
if (genNum == parseInt(user.numb1)) {
    console.log(chalk.bold.blueBright("Congratulations You Won"));
}
else {
    console.log(chalk.bold.redBright("Sorry, Better Luck Next Time"));
}
