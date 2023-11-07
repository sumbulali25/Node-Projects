import inquirer from "inquirer";

//Array todos = done
//function = done
//operation = done

let todos : string[] = ["Sumbul","Market","School"];

async function createTodo (todos:string[]){

do{    
    let ans = await inquirer.prompt({
        type:"list",
        message:"Select an Operation",
        name:"select",
        choices:["add","update","view","delete"],
    });

    if(ans.select == "add"){
        let addTodo = await inquirer.prompt({
            type:"input",
            message:"Add item",
            name:"todo",
        });
        todos.push(addTodo.todo);
        console.log(todos);
    };

    if(ans.select == "update"){
        let updateTodo = await inquirer.prompt({
            type:"list",
            message:"Select item to update",
            choices:todos.map(item => item),
            name:"update",
        });

        let addTodo = await inquirer.prompt({
            type:"input",
            message:"Add item",
            name:"todo",
        });

        let newTodos = todos.filter(val => val !== updateTodo.update );
        todos = [...newTodos,addTodo.todo];
        console.log(todos);
    };

    if(ans.select == "view"){
        console.log(todos);
    };

    if(ans.select == "delete"){
        let deleteTodo = await inquirer.prompt({
            type:"list",
            message:"Select for delete item",
            name:"del",
            choices:todos.map(item => item),
        });

        let newTodoss = todos.filter(val => val !== deleteTodo.del );
        todos = [...newTodoss];
        console.log(todos);

    }

}while(true)  

}

createTodo(todos);