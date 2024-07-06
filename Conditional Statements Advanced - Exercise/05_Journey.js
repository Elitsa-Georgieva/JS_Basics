function journey(input){
    const budget = Number(input[0]);
    const seasone = input[1];

    let typeOfVacancion;
    let destinacion;
    let moneySpent = 0;

    if(budget <= 100){
        destinacion = "Bulgaria";
        if(seasone == "summer"){
            typeOfVacancion = "Camp";
            moneySpent = budget * 0.30;
        } else if (seasone == "winter"){
            typeOfVacancion = "Hotel";
            moneySpent = budget * 0.70;
        }
    } else if ( budget > 100 && budget <= 1000){
        destinacion = "Balkans";
        if(seasone == "summer"){
            typeOfVacancion = "Camp";
            moneySpent = budget * 0.40;
        } else if (seasone == "winter"){
            typeOfVacancion = "Hotel";
            moneySpent = budget * 0.80;
        }
    } else if (budget > 1000){
        destinacion = "Europa";
        typeOfVacancion = "Hotel";
        moneySpent = budget * 0.90;
    }

    console.log(`Somewhere in ${destinacion}`);
    console.log(`${typeOfVacancion} - ${moneySpent.toFixed(2)}`);

}

journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);