function solve(input){
    let inputHour = Number(input[0]);
    let inputMinutes = Number(input[1]);

    let hour = inputHour;
    let minutes = inputMinutes + 15;


    if(minutes >= 60){
        minutes -= 60;
        hour += 1;    
    }

    if(hour > 23){
        hour = 0;
    }

    if(minutes < 10){
        console.log(`${hour}:0${minutes}`);
    }else{
        console.log(`${hour}:${minutes}`);
    }
    
}

solve(["12", "49"]);