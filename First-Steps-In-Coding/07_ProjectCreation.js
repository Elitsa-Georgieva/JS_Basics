function projectCreation(input){
    let architectName = input[0];
    let projectsCount = input[1];

    const timeNeededForOneProject = 3;

    let totalTimeNeeded = timeNeededForOneProject * projectsCount;

    console.log(`The architect ${architectName} will need ${totalTimeNeeded} hours to complete ${projectsCount} project/s.`);
}

projectCreation(["George", "4"]);