function histogram(input){
    const n = Number(input[0]);

    let countOfD1 = 0;
    let countOfD2 = 0;
    let countOfD3 = 0;
    let countOfD4 = 0;
    let countOfD5 = 0;
    
    for(let i = 1; i <= input.length - 1; i++){
        let num = input[i];
        if(num < 200){
            countOfD1 += 1;
        } else if (num >= 200 && num <= 399 ){
            countOfD2 += 1;
        } else if (num >= 400 && num <= 599){
            countOfD3 += 1;
        } else if (num >= 600 && num <= 799){
            countOfD4 += 1;
        } else if (num >= 800){
            countOfD5 += 1;
        }
    }

    console.log((countOfD1 / n * 100).toFixed(2) + "%")
    console.log((countOfD2 / n * 100).toFixed(2) + "%")
    console.log((countOfD3 / n * 100).toFixed(2) + "%")
    console.log((countOfD4 / n * 100).toFixed(2) + "%")
    console.log((countOfD5 / n * 100).toFixed(2) + "%")
    
}

histogram(["3",
    "1",
    "2",
    "999"])
    