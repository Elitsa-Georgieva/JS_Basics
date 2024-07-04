function solve(input){
    let nameOfShow = input[0];
    let timeOfEpisode = Number(input[1]);
    let timeOfBreack = Number(input[2]);

    let lunchTime = timeOfBreack / 8;
    let relaxTime = timeOfBreack /4;

    let timeForWathing = timeOfBreack - lunchTime - relaxTime;

    let timeLeft = 0;
    let timeNeeded = 0;

    if(timeForWathing >= timeOfEpisode){
        timeLeft = timeForWathing - timeOfEpisode;
        console.log(`You have enough time to watch ${nameOfShow} and left with ${Math.ceil(timeLeft)} minutes free time.`);
    }else{
        timeNeeded = timeOfEpisode - timeForWathing;
        console.log(`You don't have enough time to watch ${nameOfShow}, you need ${Math.ceil(timeNeeded)} more minutes.`);
    }

}

solve(["Game of Thrones", "60", "96"]);
solve(["Teen Wolf", "48", "60"]);
    
    
    