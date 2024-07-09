function cleverLily(input){
    const lilyAge = Number(input[0]);
    const washingMashinePrice = Number(input[1]);
    const toyPrice = Number(input[2]);

    let countOfToysGifted = 0;
    let amountOfMoneyGifted = 0;
    let moneyStolen = 0;

    let birthdayMoney = 10;

    for(let i = 1; i <= lilyAge; i++){
        if(i % 2 == 0){
            amountOfMoneyGifted += birthdayMoney;
            birthdayMoney += 10;
            moneyStolen += 1;
        } else {
            countOfToysGifted += 1;
        }
    }

    let moneySaved = amountOfMoneyGifted + (countOfToysGifted * toyPrice) - moneyStolen;
    let moneyLeft = 0;
    let moneyNeeded = 0;

    if(moneySaved >= washingMashinePrice){
        moneyLeft = moneySaved - washingMashinePrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        moneyNeeded = washingMashinePrice - moneySaved;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}

cleverLily(["10",
    "170.00",
    "6"])
    