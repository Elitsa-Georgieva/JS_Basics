function solve(input){
    const VIDEO_CARD_PRICE = 250;

    let peterBudget = Number(input[0]);
    let videoCardsWanted = Number(input[1]);
    let processorsWanted = Number(input[2]);
    let ramWanted = Number(input[3]);

    let priceOfVideoCards = videoCardsWanted * VIDEO_CARD_PRICE;
    
    let processorPrice = priceOfVideoCards * 0.35;
    let ramPrice = priceOfVideoCards * 0.10;

    let priceOfProcessors = processorPrice * processorsWanted;
    let priceOfRams = ramPrice * ramWanted;

    let totalPrice = priceOfVideoCards + priceOfProcessors + priceOfRams;

    if(videoCardsWanted > processorsWanted){
        totalPrice -= totalPrice * 0.15;
    }

    let moneyLeft = 0;
    let moneyNeeded = 0;

    if(peterBudget >= totalPrice){
        moneyLeft = peterBudget - totalPrice;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    }else{
        moneyNeeded = totalPrice - peterBudget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }
    
}

solve(["900", "2", "1", "3"]);
solve(["920.45", "3", "1", "1"]);

    