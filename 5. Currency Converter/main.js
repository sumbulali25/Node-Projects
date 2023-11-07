import inquirer from "inquirer";
let convertion = {
    "PKR": {
        "USD": 0.0034,
        "GBP": 0.0027,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.24,
        "PKR": 367.89,
        "GBP": 1
    },
    "USD": {
        "PKR": 297.03,
        "GBP": 0.81,
        "USD": 1
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "From",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Your Currency:"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Your Convertion Currency:"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your convertion amount:"
    },
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = (convertion[from][to] * amount);
    console.log(`Your convertion from ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid input");
}
