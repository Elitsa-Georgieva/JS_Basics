function solve(input){
    const studentName = input[0];
    let faild = false;
    let badGradesCount = 0;
    let currentYear = 1;
    let totalGrades = 0;
    let countOfGrades = 0;

    let idx = 1;
    while(idx <= input.length - 1){
        let gradeForTheYear = Number(input[idx]);
        currentYear ++;
        totalGrades += gradeForTheYear;
        countOfGrades++;
        if(gradeForTheYear < 4){
            badGradesCount++;
            currentYear--;
            if(badGradesCount >= 2){
                faild = true;
                break;
            }
        
        }

        idx++;
    }

    if(faild){
        console.log(`${studentName} has been excluded at ${currentYear} grade`);
    } else {
        console.log(`${studentName} graduated. Average grade: ${(totalGrades / countOfGrades).toFixed(2)}`);
    }
}

solve(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"])
    
    