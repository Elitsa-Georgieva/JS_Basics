function cinemaTicket(input){
    let dayOfWeek = input[0];

    let priceOfTicket = 0;

    if(dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Friday"){
        priceOfTicket = 12;
    } else if (dayOfWeek === "Wednesday" || dayOfWeek === "Thursday"){
        priceOfTicket = 14;
    } else if(dayOfWeek === "Saturday" || dayOfWeek === "Sunday"){
        priceOfTicket = 16;
    }

    console.log(priceOfTicket);
}

cinemaTicket(["Monday"]);