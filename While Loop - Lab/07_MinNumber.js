function solve(input){
    let idx = 0;
    let minNum = Number.POSITIVE_INFINITY;
    
    while(input.length > 0){
        let command = input[idx];
    
        if(command === "Stop"){
            break;
        }
    
        if(Number(command) < minNum){
            minNum = Number(command);
        }
            
        idx++;
    }
    
    console.log(minNum);
}


solve(["100",
    "99",
    "80",
    "70",
    "Stop"])
    