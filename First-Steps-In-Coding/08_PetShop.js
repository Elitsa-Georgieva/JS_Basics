function solve(input){
    const catFoodPrice = 4;
    const dogFoodPrice = 2.50;

    let dogFoodCount = input[0];
    let catFoodCount = input[1];

    let catFoodTotalPrice = catFoodCount * catFoodPrice;
    let dogFoodTotalPrive = dogFoodCount * dogFoodPrice;

    let totalPrice = dogFoodTotalPrive + catFoodTotalPrice;

    console.log(`${totalPrice} lv.`);

}

solve(["5", "4"]);