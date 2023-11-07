import inquirer from "inquirer";

function wordCounter(text:string){
    let freeWhiteSpce = text.replace(/\s/g,"")

    return freeWhiteSpce.length
}

async function startWordCount(counter:(text:string)=>number){

do{    
    let paragraph = await inquirer.prompt({
        type:"input",
        message:"Write paragraph here....",
        name:"text"
    })

    console.log(wordCounter(paragraph.text));

}
while(true)    
};

startWordCount(wordCounter);