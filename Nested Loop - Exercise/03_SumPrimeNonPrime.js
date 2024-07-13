function solve(input){
    let idx = 0;

    let primeSum = 0;
    let compositeSum = 0;
    while(input[idx] !== "stop"){
        const number = Number(input[idx]);

        if(number < 0){
            console.log(`Number is negative.`);
        } else {
            const limit = Math.sqrt(number);

            let isPrime = true;

            for(let i = 2; i <= limit; i++){
                if(number % i === 0){
                    isPrime = false;
                    break;
                }
            }

            if(isPrime){
                primeSum += number;
            } else {
                compositeSum += number;
            }

        }

        idx++;
        
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${compositeSum}`)
}

solve(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"])
    
    