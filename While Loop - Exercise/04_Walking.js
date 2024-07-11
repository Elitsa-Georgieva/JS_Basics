function solve(input){
    const goalSteps = 10000;
    
    let index = 0;
    let totalSteps = 0;

    while(totalSteps < goalSteps){
        let command = input[index];

        if(command === "Going home"){
            let stepsToHome = Number(input[index + 1]);
            totalSteps += stepsToHome;
            break;
        }
        totalSteps += Number(command);
        index++;
    }


    if(totalSteps >= goalSteps){
        console.log(`Goal reached! Good job!`);
        console.log(`${Number(totalSteps - goalSteps)} steps over the goal!`);
    } else {
        console.log(`${Number(goalSteps - totalSteps)} more steps to reach goal.`);
    }
}

solve(["1000", "1500", "2000", "6500"]);
solve(["1500", "300", "2500", "3000", "Going home", "200"]);
solve(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
solve(["125", "250", "4000", "30", "2678", "4682"]);
    
    
    
    