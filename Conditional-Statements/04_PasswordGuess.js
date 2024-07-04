function solve(input){
    const REAL_PASSWORD = "s3cr3t!P@ssw0rd";


    let text = input[0];

    if(text === REAL_PASSWORD){
        console.log("Welcome");
    }else{
        console.log("Wrong password!");
    }
}

solve(["qwerty"]);
solve(["s3cr3t!P@ssw0rd"]);
solve(["s3cr3t!p@ss"]);