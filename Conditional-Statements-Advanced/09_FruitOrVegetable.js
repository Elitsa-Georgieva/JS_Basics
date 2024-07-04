function fruitOrVegetable(input){
    const word = input[0];

    let fruitsList = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes"];
    let vegetablesList = ["tomato", "cucumber", "pepper", "carrot"];

    if(fruitsList.includes(word)){
        console.log("fruit");
    } else if (vegetablesList.includes(word)){
        console.log("vegetable");
    } else {
        console.log("unknown");
    }

}

fruitOrVegetable(["tomato"]);