function solve(input){
    let timeFirst = Number(input[0]);
    let timeSecond = Number(input[1]);
    let timeThird = Number(input[2]);

    let totalTime = timeFirst + timeSecond + timeThird;

    let minutes = Math.floor(totalTime / 60);
    let secondsLeft = totalTime % 60;

    if(secondsLeft < 10){
        console.log(`${minutes}:0${secondsLeft}`);
    }else{
        console.log(`${minutes}:${secondsLeft}`);
    }   

    // console.log(minutes);
    // console.log(secondsLeft);
}

solve(["35", "45", "44"]);
solve(["22", "7", "34"]);
solve(["50", "50", "49"]);
solve(["14", "12", "10"]);