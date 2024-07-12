function solve(input){
    let goalNum = Number(input[0]);
    let idx = 1;
    let sum = 0;

    while(sum < goalNum){
        sum += Number(input[idx++]);
    }

    console.log(sum);
}

solve(["100",
    "10",
    "20",
    "30",
    "40"])
    