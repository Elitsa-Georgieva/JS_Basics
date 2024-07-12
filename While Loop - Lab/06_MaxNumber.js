function solve(input){
    let idx = 0;
    let maxNum = Number.NEGATIVE_INFINITY;

    while(input.length > 0){
        let command = input[idx];

        if(command === "Stop"){
            break;
        }

        if(Number(command) > maxNum){
            maxNum = Number(command);
        }
        
        idx++;
    }

    console.log(maxNum);
}

solve(["100",
    "99",
    "80",
    "70",
    "Stop"])
    
    
    