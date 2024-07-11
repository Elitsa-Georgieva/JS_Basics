function solve(input){
    const widthFreeSpace = Number(input[0]);
    const lengthFreeSpace = Number(input[1]);
    const heightFreeSpace = Number(input[2]);

    let freeSpaceCubicCm = widthFreeSpace * lengthFreeSpace * heightFreeSpace;
    let countOfBoxes = 0;

    let index = 3;

    while(input[index] !== "Done" && freeSpaceCubicCm >= 0){
        let countOfBoxesIncomming = Number(input[index]);

        //countOfBoxes += countOfBoxesIncomming;
        freeSpaceCubicCm -= countOfBoxesIncomming;

        index++;

    }

    if(freeSpaceCubicCm >= 0){
        console.log(`${freeSpaceCubicCm} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${-1 * freeSpaceCubicCm} Cubic meters more.`)
    }


}