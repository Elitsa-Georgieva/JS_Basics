function solve(input){
    let text = input[0];

    switch(text){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day");
            break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Error");
            break;
    }

}

solve(["Monday"]);
solve(["Sunday"]);
solve(["May"]);