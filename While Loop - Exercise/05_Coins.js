function coins(input){
    let amount = Math.floor(Number(input[0] * 100));

    let coinsCount = 0;
    while(amount > 0){
        if(amount >= 200){
            amount -= 200;
        } else if (amount >= 100){
            amount -= 100;
        } else if (amount >= 50){
            amount -= 50;
        } else if (amount >= 20){
            amount -= 20;
        } else if (amount >= 10){
            amount -= 10;
        } else if (amount >= 5){
            amount -= 5;
        } else if (amount >= 2){
            amount -= 2;
        } else {
            amount -= 1;
        }

        coinsCount++
    }

    console.log(coinsCount);
}

coins(["1.23"]);
coins(["2"]);
coins(["0.56"]);
coins(["2.73"]);