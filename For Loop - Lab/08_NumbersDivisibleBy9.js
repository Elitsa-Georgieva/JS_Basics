// //Solution 1
// function numDivisibleBy9(input){
//     let start = Number(input[0]);
//     let end = Number(input[1]);

//     let sum = 0;

//     for(let num = start; num <= end; num++){
//         if(num % 9 === 0){
//             sum += num;
//         }
//     }

//     console.log(`The sum: ${sum}`);

//     for(let num = start; num <= end; num++){
//         if(num % 9 === 0){
//             console.log(num);
//         }
//     }

// }

//Solution 2
function numDivisibleBy9(input){
    let start = Number(input[0]);
    let end = Number(input[1]);

    let sum = 0;
    let output = "";

    for(let num = start; num <= end; num++){
        if(num % 9 === 0){
            sum += num;
            output += num.toString() + "\n";
        }
    }

    console.log(`The sum: ${sum}`);
    console.log(output);
    

}


numDivisibleBy9(["100", "200"]);