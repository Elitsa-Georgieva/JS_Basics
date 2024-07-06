function newHouse(input){
    const typeOfFlower = input[0];
    const countOfFlowers = Number(input[1]);
    const budget = Number(input[2]);

    let priceOfFlower;
    let discount = 0;
    let increase = 0;
    let sumOfDiscount;
    let totalPrice = 0;
    
    if(typeOfFlower == "Roses"){
        priceOfFlower = 5.00;
        if(countOfFlowers > 80){
            discount = (countOfFlowers * priceOfFlower) * 0.10;
        } 
    } else if (typeOfFlower == "Dahlias"){
        priceOfFlower = 3.80;
        if(countOfFlowers > 90){
            discount = (countOfFlowers * priceOfFlower) * 0.15;
        } 
    } else if (typeOfFlower == "Tulips"){
        priceOfFlower = 2.80;
        if(countOfFlowers > 80){
            discount = (countOfFlowers * priceOfFlower) * 0.15;
        }
    } else if (typeOfFlower == "Narcissus"){
        priceOfFlower = 3.00;
        if(countOfFlowers < 120){
            increase = (countOfFlowers * priceOfFlower) * 0.15;
        } 
    } else if (typeOfFlower == "Gladiolus"){
        priceOfFlower = 2.50;
        if(countOfFlowers < 80){
            increase = (countOfFlowers * priceOfFlower) * 0.20;; 
        }
    }

    totalPrice = (countOfFlowers * priceOfFlower) - discount + increase;
    

    let moneyLeft = budget - totalPrice;
    let moneyneeded = totalPrice - budget;

    if(budget >= totalPrice){

        console.log(`Hey, you have a great garden with ${countOfFlowers} ${typeOfFlower} and ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${moneyneeded.toFixed(2)} leva more.`);
    }
    
}

newHouse(["Gladiolus", "64", "160"]);