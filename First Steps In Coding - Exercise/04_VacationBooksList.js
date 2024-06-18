function solve(input){
    let booksPages = input[0];
    let pagesForHour = input[1];
    let daysForOneBook = input[2];

    let hoursReadingPerDay = (booksPages / pagesForHour) / daysForOneBook;

    console.log(hoursReadingPerDay);
}

solve(["212", "20", "2"]);
