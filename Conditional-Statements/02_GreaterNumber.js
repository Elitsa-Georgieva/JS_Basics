function isGreater(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    if(num1 > num2){
        console.log(num1);
    }else{
        console.log(num2);
    }
}

isGreater(["5", "3"]);
isGreater(["3", "5"]);
isGreater(["10", "10"]);