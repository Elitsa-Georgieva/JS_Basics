function solve(input){
    const chickenMenuPrice = 10.35;
    const fishMenuPrice = 12.40;
    const veggieMenuPrice = 8.15;
    const deliveryPrice = 2.50;

    let chickenMenuCount = Number(input[0]);
    let fishMenuCount = Number(input[1]);
    let veggieMenuCount = Number(input[2]);

    let priceOfChicken = chickenMenuPrice * chickenMenuCount;
    let priceOfFish = fishMenuPrice * fishMenuCount;
    let priceOfVeggie = veggieMenuPrice * veggieMenuCount;

    let priceOfMenues = priceOfChicken + priceOfFish + priceOfVeggie;

    let priceOfDessert = priceOfMenues * 0.2;

    let totalPrice = priceOfMenues + priceOfDessert + deliveryPrice;

    //console.log(priceOfMenues);
    //console.log(priceOfDessert);
    console.log(totalPrice);
}

solve(["2", "4", "3"]);