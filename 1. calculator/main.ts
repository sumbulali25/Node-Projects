import inquirer from "inquirer";

import { sum } from "./operations/add.js"
import { subtract } from "./operations/subtract.js";
import {multiply} from "./operations/multiply.js";
import {divide} from "./operations/divide.js"
let answers = await inquirer.prompt([
    {
        type:"number",
        name:"num1",
        message:"enter first number"
    },{
    type:"number",
    name:"num2",
    message:"enter second number"

    },{
        type:"list",
        name:"operator",
        message:"select operator",
        choices:["+","-","/","*"]


    }


]);
let result;
if(answers.operator === "+"){
    result = sum(answers.num1,answers.num2)

}else if(answers.operator==="-"){
result=subtract(answers.num1,answers.num2)}
console.log("your result is:",result);
