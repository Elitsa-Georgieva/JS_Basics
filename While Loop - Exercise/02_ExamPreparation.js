function solve(input){
    let poorGrades = Number(input[0]);
    let isEnough = false;
    let score = 0;
    let numberOfProblems = 0;
    //let averageScore = Number(score / numberOfProblems);
    let lastProblem;
    let index = 1;
    let countOfPoorGrades = 0;
    let currProblem = input[index] ;
    

    while(currProblem !== "Enough"){
        
        let currScore = Number(input[index + 1]);

        if (currScore <= 4){
            countOfPoorGrades ++;
            if(countOfPoorGrades >= poorGrades){
                break;
            }
        }

        numberOfProblems ++;
        score += currScore;
        lastProblem = currProblem;
        index += 2;
        currProblem = input[index];

    }

    if(currProblem == "Enough"){
        console.log(`Average score: ${(Number(score / numberOfProblems)).toFixed(2)}`);
        console.log(`Number of problems: ${numberOfProblems}`);
        console.log(`Last problem: ${lastProblem}`);
        isEnough = true;
    } else {
        console.log(`You need a break, ${countOfPoorGrades} poor grades.`)
    }
}

solve(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])
    