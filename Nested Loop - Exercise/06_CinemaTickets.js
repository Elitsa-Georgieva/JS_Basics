function solve(input){
    let idx = 0;
    let movieName = input[idx];
    let studentsTicketCount = 0;
    let standartTicketCount = 0;
    let kidsTicketCount = 0;
    let totalTickets = 0;

    while(movieName !== "Finish"){
        let freeSpaces = Number(input[++idx]);

        let ticketsCount = 0;
        for(let i = 0; i < freeSpaces; i++){
            let ticketType = input[++idx];
            if(ticketType === "End") break;

            if(ticketType === 'student'){
                studentsTicketCount++;
            } else if (ticketType === "standard"){
                standartTicketCount++;
            } else if (ticketType === "kid"){
                kidsTicketCount++;
            }

            ticketsCount++;
        }

        console.log(`${movieName} - ${((ticketsCount / freeSpaces) * 100).toFixed(2)}% full.`);
        totalTickets += ticketsCount;

        movieName = input[++idx];

    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentsTicketCount / totalTickets) * 100).toFixed(2)}% student tickets.`)
    console.log(`${((standartTicketCount / totalTickets) * 100).toFixed(2)}% standard tickets.`)
    console.log(`${((kidsTicketCount / totalTickets) * 100).toFixed(2)}% kids tickets.`)

}

solve(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
    