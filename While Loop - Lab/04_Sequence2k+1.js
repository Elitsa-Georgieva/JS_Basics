function solve(input){
    let n = Number(input[0]);

    let idx = 1;

    while(idx <= n){
        console.log(idx);
        idx = (idx * 2) + 1;
    }
}

solve(["31"])