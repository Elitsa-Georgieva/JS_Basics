function vowelsSum(input){
    let word = input[0];
    let count = 0;

    for(let i = 0; i < word.length; i++){
        if(word[i] === "a"){
            count += 1;
        } else if (word[i] === "e"){
            count += 2;
        } else if (word[i] === "i"){
            count += 3;
        } else if (word[i] === "o"){
            count += 4;
        } else if (word[i] === "u"){
            count += 5;
        }
    }

    console.log(count);
}

vowelsSum(["hello"]);