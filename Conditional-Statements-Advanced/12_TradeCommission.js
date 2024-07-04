function tradeCommission(input){
    const town = input[0];
    const trade = Number(input[1]);

    let commission = 0;

    if(town === "Sofia"){
        if(trade >= 0 &&  trade <= 500){
            commission = trade * 0.05;
        } else if(trade > 500 &&  trade <= 1000){
            commission = trade * 0.07;;
        } else if( trade > 1000 &&  trade <= 10000){
            commission = trade * 0.08;;
        } else if(trade > 10000){
            commission = trade * 0.12;;
        } else if (trade < 0){
            console.log("error");
            return;
        }
    } else if(town === "Varna"){
        if(trade >= 0 &&  trade <= 500){
            commission = trade * 0.045;
        } else if(trade > 500 &&  trade <= 1000){
            commission = trade * 0.075;
        } else if( trade > 1000 &&  trade <= 10000){
            commission = trade * 0.10;;
        } else if(trade > 10000){
            commission = trade * 0.13;;
        }  else if (trade < 0){
            console.log("error");
            return;
        }
    } else if(town === "Plovdiv"){
        if(trade >= 0 &&  trade <= 500){
            commission = trade * 0.055;
        } else if(trade > 500 &&  trade <= 1000){
            commission = trade * 0.08;
        } else if( trade > 1000 &&  trade <= 10000){
            commission = trade * 0.12;
        } else if(trade > 10000){
            commission = trade * 0.145;
        } else if (trade < 0){
            console.log("error");
            return;
        }
    } else {
        console.log("error");
        return;
    }

    console.log(commission.toFixed(2));
}

tradeCommission(["Plovdiv", "499.99"]);
    