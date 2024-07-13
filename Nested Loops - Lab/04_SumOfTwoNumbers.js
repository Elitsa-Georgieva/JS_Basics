function solve(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);

    let countOfCombinations = 0;
    let combinationFound = false;

    for(let num1 = start; num1 <= end; num1++){
        for(let num2 = start; num2 <= end; num2++){
            countOfCombinations++;
            if(num1 + num2 === magicNum){
                console.log(`Combination N:${countOfCombinations} (${num1} + ${num2} = ${magicNum})`)
                combinationFound = true;
                break;
            }
           
        }
        if(combinationFound){
            break;
        }
        if(combinationFound){
            break;
        }

    }

    if(!combinationFound){
        console.log(`${countOfCombinations} combinations - neither equals ${magicNum}`);
    }
}

solve(["1",
    "10",
    "5"])
    
    
    