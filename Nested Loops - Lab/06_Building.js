function solve(input){
    let countOffloors = Number(input[0]);
    let countOfRooms = Number(input[1]);

    let result = '';

    for(let floor = countOffloors; floor >= 1; floor--){
        for(let room = 0; room < countOfRooms; room++){
            if(floor == countOffloors)
            {
                result += ("L" + floor + room + " ");
            } else if (floor % 2 == 0){
                result += ("O" + floor + room + " ");
            } else {
                result += ("A" + floor + room + " ");
            }

        }

        result += "\n";
        
    }

    console.log(result)
}

solve(["6", "4"])