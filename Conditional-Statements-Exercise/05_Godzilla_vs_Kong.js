function solve(input){
    const FILM_BUDGET = Number(input[0]);
    const COUNT_OF_EXTRAS = Number(input[1]);
    const PRICE_CLOTHES = Number(input[2]);

    let priceOfDecor = FILM_BUDGET * 0.10;
    let priceOfAllClothes = PRICE_CLOTHES * COUNT_OF_EXTRAS;

    if(COUNT_OF_EXTRAS > 150){
        priceOfAllClothes -= priceOfAllClothes * 0.10;
    }

    let totalSum = priceOfDecor + priceOfAllClothes;
    let moneyNeeded = 0;
    let moneyLeft = 0;

    if(totalSum > FILM_BUDGET){
        moneyNeeded = totalSum - FILM_BUDGET;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    }else{
        moneyLeft = FILM_BUDGET - totalSum;;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}

solve(["20000", "120", "55.5"]);