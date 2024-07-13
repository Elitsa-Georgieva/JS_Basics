function solve(input){
    let n = Number(input[0]);
    
    let idx = 1;
    let sumOfGrades = 0;
    let countOfGrades = 0;
    let sumOfGradesForPresentation = 0;

    while(input[idx] !== "Finish"){
        let nameOfPresentation = input[idx];
        sumOfGradesForPresentation = 0;
        for(let i = 0; i < n; i++){
            idx++;
            let gradeForPresentation = Number(input[idx]);
            sumOfGradesForPresentation += gradeForPresentation;
            countOfGrades++
            sumOfGrades += gradeForPresentation;
            
        }
        console.log(`${nameOfPresentation} - ${(sumOfGradesForPresentation/n).toFixed(2)}.`)

        //countOfPresentation++;

        idx++;
    }

    console.log(`Student's final assessment is ${(sumOfGrades/countOfGrades).toFixed(2)}.`)
}

solve(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"])
    
    