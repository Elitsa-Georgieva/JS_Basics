function solve(input){
    let username = input[0];
    let password = input[1];

    let data = input[2];
    let idx = 3;
    while(data !== password){
        data = input[idx++];
    }

    console.log(`Welcome ${username}!`);
}

solve(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])
    