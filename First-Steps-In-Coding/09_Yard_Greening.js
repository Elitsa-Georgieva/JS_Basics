function solve(input){
    const pricePerSquareMeter = 7.61;
    const discount = 0.18;

    let areaInMeters = input[0];
    let pricePerOneHouse = pricePerSquareMeter * areaInMeters;
    let discountSum = pricePerOneHouse * discount;

    let finalPriceForService = pricePerOneHouse - discountSum;

    console.log(`The final price is: ${finalPriceForService} lv.`);
    console.log(`The discount is: ${discountSum} lv.`);

}

solve(["550"]);