function characterSequence(input){
    let string = input[0];

    // for(let i = 0; i < string.length; i++){
    //     console.log(string[i]);
    // }

    for(const letter of string){
        console.log(letter);
    }
}

characterSequence(["softuni"]);