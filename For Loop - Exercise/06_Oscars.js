function oscars(input){
    const actor = input[0];
    const pointsFromAcademy = Number(input[1]);
    const n = Number(input[2]);
    const nominationPoints = 1250.5;

    let points = pointsFromAcademy;

    //[0, 1, 2, 3,...,n - 1]
    for(let i = 0; i < n; i ++){
        const juryName = input[3 + i * 2];
        const juryPoints = input[4 + i * 2];

        points += juryName.length * juryPoints / 2;

        if(points > nominationPoints){
            break;
        }
    }

    if(points > nominationPoints){
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${points}!`)
    } else {
        console.log(`Sorry, ${actor} you need ${nominationPoints - points} more!`);
    }

}

oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])
    
// oscars(["Sandra Bullock",
//     "340",
//     "5",
//     "Robert De Niro",
//     "50",
//     "Julia Roberts",
//     "40.5",
//     "Daniel Day-Lewis",
//     "39.4",
//     "Nicolas Cage",
//     "29.9",
//     "Stoyanka Mutafova",
//     "33"])
    