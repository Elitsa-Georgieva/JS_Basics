function birthdayCacke(input){
    const width = Number(input[0]);
    const length = Number(input[1]);

    let countOfPieces = width * length;
    let countOfPiecesTaken = 0;

    let index = 2;

    while(countOfPiecesTaken < countOfPieces){
        let command = input[index];

        if(command === "STOP"){
            break;
        } else {
            countOfPiecesTaken += Number(input[index]);
        }


        index++;
    }

    if(countOfPiecesTaken < countOfPieces){
        console.log(`${countOfPieces - countOfPiecesTaken} pieces are left.`)
    } else {
        console.log(`No more cake left! You need ${countOfPiecesTaken - countOfPieces} pieces more.`);
    }
}


function birthdayCacke2(input){
    const width = Number(input[0]);
    const length = Number(input[1]);

    let countOfPieces = width * length;
    let index = 2;

    while(countOfPieces >= 0 && input[index] !== "STOP"){
        const piecesToTake = Number(input[index]);
        countOfPieces -= piecesToTake;

        index++;
    }

    if(countOfPieces >= 0){
        console.log(`${countOfPieces} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${-1 * countOfPieces} pieces more.`);
    }
}

// birthdayCacke(["10", "10", "20", "20", "20", "20", "21"])
// birthdayCacke(["10", "2", "2", "4", "6", "STOP"])
birthdayCacke(["10", "2", "2", "4", "6", "STOP"]);
    
    