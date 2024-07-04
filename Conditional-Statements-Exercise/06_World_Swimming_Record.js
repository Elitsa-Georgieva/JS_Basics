function solve(input){
    const WORLD_RECORD_SEC = Number(input[0]);
    const DISTANCE_IN_METERS = Number(input[1]);
    const TIME_FOR_METER_IN_SEC = Number(input[2]);

    let delay = Math.floor(DISTANCE_IN_METERS / 15) * 12.5;
    let IVAN_TIME = (DISTANCE_IN_METERS * TIME_FOR_METER_IN_SEC) + delay;

    if(IVAN_TIME < WORLD_RECORD_SEC){
        console.log(`Yes, he succeeded! The new world record is ${IVAN_TIME.toFixed(2)} seconds.`);
    }else{
        let secNeeded = IVAN_TIME - WORLD_RECORD_SEC;
        console.log(`No, he failed! He was ${secNeeded.toFixed(2)} seconds slower.`);
    }
    
}

solve(["10464", "1500", "20"]);
solve(["55555.67", "3017", "5.03"]);
    
    
