function fishingBoat(input){
    const budget = Number(input[0]);
    const seasone = input[1];
    const countOfFishermans = Number(input[2]);

    let boatRent = 0;

    if(seasone == "Spring"){
        boatRent = 3000;
        if(countOfFishermans <= 6){
            boatRent -= boatRent * 0.10;
        } else if (countOfFishermans > 6 && countOfFishermans <= 11){
            boatRent -= boatRent * 0.15;
        } else if (countOfFishermans > 12){
            boatRent -= boatRent * 0.25;
        }

        if(countOfFishermans % 2 == 0){
            boatRent -= boatRent * 0.05;
        }

    } else if (seasone == "Summer" || seasone == "Autumn"){
        boatRent = 4200;
        if(countOfFishermans <= 6){
            boatRent -= boatRent * 0.10;
        } else if (countOfFishermans > 6 && countOfFishermans <= 11){
            boatRent -= boatRent * 0.15;
        } else if (countOfFishermans > 12){
            boatRent -= boatRent * 0.25;
        }

        if(countOfFishermans % 2 == 0 && seasone == "Summer"){
            boatRent -= boatRent * 0.05;
        }

        
    } else if (seasone == "Winter"){
        boatRent = 2600;
        if(countOfFishermans <= 6){
            boatRent -= boatRent * 0.10;
        } else if (countOfFishermans > 6 && countOfFishermans <= 11){
            boatRent -= boatRent * 0.15;
        } else if (countOfFishermans > 12){
            boatRent -= boatRent * 0.25;
        }

        if(countOfFishermans % 2 == 0){
            boatRent -= boatRent * 0.05;
        }
    }

    let moneyLeft = budget - boatRent;
    let moneyNeeded = boatRent - budget;

    if(budget >= boatRent){
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
}

fishingBoat(["3000",
    "Summer",
    "11"])
    