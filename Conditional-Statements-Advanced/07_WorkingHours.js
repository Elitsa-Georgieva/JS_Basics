function workingHours(input){
    let hour = Number(input[0]);
    let dayOfTheWeek = input[1];

    if(dayOfTheWeek === "Sunday"){
            console.log("closed");
    } else {
        if(hour >= 10 && hour <= 18){
            console.log("open");
        } else {
            console.log("closed");
        }
    }
}

function workingHours2(input){
    let hour = Number(input[0]);
    let dayOfTheWeek = input[1];

    if(day != "Sunday" && hour >= 10 && hour <= 18) {
        console.log("open");
    }  else {
        console.log("closed");
    }
}

function workingHours3(input){
    const hour = Number(input[0]);
    const day = Number(input[1]);

    const workingDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if(workingDay.includes(day) && hour >= 10 && hour <= 18){
        console.log("open");
    } else {
        console.log("closed");
    }
}

workingHours(["11", "Monday"]);
workingHours(["19", "Friday"]);
workingHours(["11", "Sunday"]);
workingHours(["20", "Tuesday"]);