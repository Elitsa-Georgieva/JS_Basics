function solve(input){
    let annualFee = Number(input);

    let sneakersPrice = annualFee - (annualFee * 0.4);
    let OutfitPrice = sneakersPrice - (sneakersPrice * 0.2);
    let basketBallPrice = OutfitPrice / 4;
    let accessoriesPrice = basketBallPrice / 5;

    let basketballЕxpenses = annualFee + sneakersPrice + OutfitPrice + basketBallPrice + accessoriesPrice;

    console.log(basketballЕxpenses);

}

solve(["550"]);