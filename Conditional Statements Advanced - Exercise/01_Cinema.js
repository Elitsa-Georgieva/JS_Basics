function cinema(input){
    const typeOfProjection = input[0];
    const r = Number(input[1]);
    const col = Number(input[2]);

    let income = 0;

    if(typeOfProjection == "Premiere"){
        income = r * col * 12.00;
    } else if (typeOfProjection == "Normal"){
        income = r * col * 7.50;;
    } else if (typeOfProjection == "Discount"){
        income = r * col * 5.00;
    }

    console.log(`${income.toFixed(2)} leva`)
}

cinema(["Premiere",
    "10",
    "12"])
cinema(["Normal",
    "21",
    "13"])

cinema(["Discount",
    "12",
    "30"])
    
    