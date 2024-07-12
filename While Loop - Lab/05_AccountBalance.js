function solve(input){
    let idx = 0;
    let sum = 0;
    let command = input[idx];

    while(input.length > 0){

        let command = input[idx];
        if(command === "NoMoreMoney"){
            break;
        }

        if(Number(command) < 0){
            console.log("Invalid operation!");
            break;
        }
        console.log("Increase: " + Number(command).toFixed(2));
        sum += Number(command);

        idx++;
    }

    console.log("Total: " + sum.toFixed(2));


}

solve(["5.51", 
    "69.42",
    "100",
    "NoMoreMoney"])