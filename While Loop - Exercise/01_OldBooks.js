function solve(input){
    const requestedBook = input[0];

    let isFound = false;
    let index = 1;
    let counter = 0;
    let currentBook = input[index];

    while(currentBook !== "No More Books"){
        if(currentBook === requestedBook){
            isFound = true;
            break;
        }

        counter++;
        //index++;
        //currentBook = input[index + 1]
        currentBook = input[++index]
    }

    if(isFound){
        //console.log(`You checked ${index - 1} books and found it.`)
        console.log(`You checked ${counter} books and found it.`)
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${counter} books.`);
    }
}

solve(["Troy", "Stronger", "Life Style", "Troy"]);
solve(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
    
    