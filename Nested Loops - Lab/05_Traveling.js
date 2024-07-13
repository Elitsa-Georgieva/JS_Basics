function solve(input){
    let idx = 0;

    while(idx < input.length){
        let destination = input[idx++];

        if(destination === "End"){
            break;
        }

        let minBudget = Number(input[idx++]);
        let savedMoney = 0;

        while(savedMoney < minBudget){
            savedMoney += Number(input[idx++]);
        }

        console.log(`Going to ${destination}!`)
    }
}

solve(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"])
    