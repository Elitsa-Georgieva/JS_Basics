function converter(input){
    const courseDolarInLeva = 1.79549;

    let usd = Number(input[0]);
    let bgn = usd * courseDolarInLeva;

    console.log(bgn);

}

converter(["22"]);
converter(["100"]);
converter(["12.5"]);