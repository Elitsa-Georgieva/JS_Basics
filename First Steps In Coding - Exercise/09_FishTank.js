function solve(input){
    let lengthCm = Number(input[0]);
    let widthCm = Number(input[1]);
    let heightCm = Number(input[2]);

    let percentOfCapacityOccupied = Number(input[3]);

    let volumeCubicCm = lengthCm * widthCm * heightCm;

    let volumeLiters = volumeCubicCm / 1000;

    let volumeFree = volumeLiters - (volumeLiters * (percentOfCapacityOccupied / 100));

    //console.log(volumeLiters);
    console.log(volumeFree);
}

solve(["85", "75", "47", "17"]);