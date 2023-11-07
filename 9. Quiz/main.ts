import inquirer from "inquirer";
import chalk from "chalk";

const apiLink:string = "https://opentdb.com/api.php?amount=20&category=18&difficulty=easy&type=multiple";

let fetchData = async (data:string) => {
    let fetchQuiz: any = await fetch(data);
    let response = await fetchQuiz.json();
    return response.results;
}

let data = await fetchData(apiLink);

let startQuiz = async () => {
    let score:number = 0
    //For User Name
    let name = await inquirer.prompt({
        type: "input",
        message: "What is your Name?",
        name: 'fname',
    });

    let eMail = await inquirer.prompt({
        type: "input",
        message: "What is your Email ID",
        name: 'ID',
    });


    for(let i = 1; i<20; i++){
        let answers = [...data[i].incorrect_answers,data[i].correct_answer]

        let ans = await inquirer.prompt({
            type: "list",
            name: "quiz",
            message: data[i]. question,
            choices: answers.map((val: any) => val),
        });

        if(ans.quiz == data[i].correct_answer){
            ++score
            console.log(chalk.bold.italic.blueBright("Correct Answer"));
        }
        else{
            console.log(`Correct Answer is ${chalk.bold.italic.redBright(data[i].correct_answer)}`)
        }
    }
    console.log(`Dear ${chalk.bold.greenBright(name.fname)}, Your Email ID is ${chalk.bold.yellowBright(eMail.ID)}, Your score is: ${chalk.bold.redBright(score)} out of ${chalk.bold.red("20")}`);
};

startQuiz();