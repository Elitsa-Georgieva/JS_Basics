function solve(input){
    let radians = Number(input[0]);
 
    let degrees = radians * 180 / Math.PI;

    console.log(degrees);
}

solve(["3.1416"]);
solve(["6.2832"]);