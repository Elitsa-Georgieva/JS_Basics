function solve(input){
    let vacCost = Number(input[0]);
    let jecyMoney = Number(input[1]);
    let consecutiveSpendOperation = 0;
    let failed = false;
    let index = 2;
    let days = 0;

    while(jecyMoney < vacCost){
        let action = input[index];
        let sumForAction = Number(input[index + 1]);

        days ++;

        if(action === "save"){
            consecutiveSpendOperation = 0;
            jecyMoney += sumForAction;
        } else if ( action === "spend"){
            if(++consecutiveSpendOperation === 5){
                failed = true;
                break;
            };
            jecyMoney = Math.max(jecyMoney - sumForAction, 0);
        }

        

        index += 2;
    }

    if(failed){
        console.log(`You can't save the money.`);
        console.log(`${days}`);
    } else {
        console.log(`You saved the money for ${days} days.`);
    }
}

solve(["2000", "1000", "spend", "1200", "save", "2000"]);
solve(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
solve(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);
    
    
    