function solve(input){
    let index = 0;
    
    while(input[index] !== "Stop"){
        console.log(input[index]);
        index++
    }
}

function solve2(input){
    let idx = 0;

    while(true){
        let word = input[idx++];
        if(word === "Stop"){
            break;
        }

        console.log(word);
    }
}

solve2(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])
    