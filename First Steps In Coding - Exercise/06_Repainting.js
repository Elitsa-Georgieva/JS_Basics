function repainting(input){
    const nylonPriceForSquareMeter = 1.50;
    const paintPriceForLiter = 14.50;
    const paintThinnerPriceForLiter = 5.00;
    const priceOfBags = 0.40;

    let nylonNeededSquareMeteres = Number(input[0]);
    let paintNeededInLiters = Number(input[1]);
    let paintThinnerNeededInLiters = Number(input[2]);
    let hoursOfWorkNeeded = Number(input[3]);

    let priceOfNylon = nylonPriceForSquareMeter * (nylonNeededSquareMeteres + 2);
    let priceOfPaint = paintPriceForLiter * paintNeededInLiters;
    let priceOfPaintThinner = paintThinnerNeededInLiters * paintThinnerPriceForLiter;

    let totalPriceOfPaint = priceOfPaint + (priceOfPaint * 0.1);

    let priceOfMaterials = priceOfBags + priceOfNylon + totalPriceOfPaint + priceOfPaintThinner;
    let priceOfWorkForHour = priceOfMaterials * 0.30;
    
    let totalPrice = priceOfMaterials + (priceOfWorkForHour * hoursOfWorkNeeded);

    console.log(totalPrice);
}

repainting(["10", "11", "4", "8"]);
repainting(["5", "10", "10", "1"]);