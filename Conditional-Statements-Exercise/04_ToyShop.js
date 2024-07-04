function toyShop(input){
    const PUZZLE_PRICE = 2.60;
    const TALKING_DOLL_PRICE = 3;
    const TEDDY_BEAR_PRICE = 4.10;
    const MINION_PRICE = 8.20;
    const TRUCK_PRICE = 2;

    let vacationPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let talkingDollCount = Number(input[2]);
    let teddyBearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let priceOfOrderedToys = (puzzleCount * PUZZLE_PRICE) + (talkingDollCount * TALKING_DOLL_PRICE) + (teddyBearCount * TEDDY_BEAR_PRICE) + (minionCount * MINION_PRICE) + (truckCount * TRUCK_PRICE);
    let countOforderedToys = puzzleCount + talkingDollCount + teddyBearCount + minionCount + truckCount;

    if(countOforderedToys >= 50){
        priceOfOrderedToys -= priceOfOrderedToys * 0.25;
    }

    let shopRent = priceOfOrderedToys * 0.10;
    let money = priceOfOrderedToys - shopRent;
    let moneyNeeded = vacationPrice - money;
    let moneyLeft = money - vacationPrice;

    if(money >= vacationPrice){
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    }else{
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
    }

}

//toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);