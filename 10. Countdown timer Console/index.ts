import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer"

const res = await inquirer.prompt ({
    type: "number",
    name: "user1",
    message: "Please enter the amount of second",
    validate:(input)=>{
        if (isNaN(input)){
            return "Please enter a valid number";
        }else if (input > 60) {
        return "seconds must be in 60";
     } else 
     return true}

});
let input = res.user1

function startTime (val:number) {
    const initialTime = new Date().setSeconds(new Date().getSeconds()+val)
    const IntervalTime = new Date(initialTime)
    setInterval(()=>{
        const currentTime = new Date();
        const TimeDifference = differenceInSeconds(IntervalTime,currentTime);
        if(TimeDifference <=0){
            console.log("Timer has expired")
            process.exit()
        }  
        const min=Math.floor((TimeDifference % (3600*24))/3600);
        const sec=Math.floor(TimeDifference % 60);
        console.log(`${min.toString() . padStart(2 , "0")}:${sec.toString() . padStart(2 , "0")}`)
}, 1000);
}
startTime (input)



