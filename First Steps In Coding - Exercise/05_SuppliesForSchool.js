function solve(input){
    const pricePackOfPens = 5.80;
    const pricePackOfMarkers = 7.20;
    const priceLiterCleaner = 1.20;

    let pensNeededPacks = Number(input[0]); 
    let markersNeededPacks = Number(input[1]); 
    let cleanerNeededInLiters = Number(input[2]); 
    let discount = Number(input[3]) / 100;

   let priceOfPensNeeded = pricePackOfPens * pensNeededPacks;
   let priceOfmarkersNeeded = pricePackOfMarkers * markersNeededPacks;
   let priceOfCleanerNeeded = priceLiterCleaner * cleanerNeededInLiters;

    let price = priceOfPensNeeded + priceOfmarkersNeeded + priceOfCleanerNeeded;

    //console.log(price);

    //let sumOfDiscount = price * discount;
    let totalPrice = price - (price * discount);

    console.log(totalPrice);

}

solve(["2", "3", "4", "25"])