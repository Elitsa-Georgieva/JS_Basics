function numOperation(input){
    const N1 = Number(input[0]);
    const N2 = Number(input[1]);
    const operator = input[2];

    // 
    
    if(operator === "+" || operator === "-" || operator === "*"){
        let result = 0;

        if(operator === "+"){
            result = N1 + N2;
        } else if (operator === "-"){
            result = N1 - N2;
        } else if (operator === "*"){
            result = N1 * N2;
        }

        let parity = "";
        if(result % 2 === 0){
            parity = "even";
        } else {
            parity = "odd";
        }

        console.log(`${N1} ${operator} ${N2} = ${result} - ${parity}`);
    } else if (operator === "/" || operator === "%"){
        if(N2 === 0){
            console.log(`Cannot devide ${N1} by zero`);
        } else if ( operator === "/"){
            console.log(`${N1} / ${N2} = ${(N1 / N2).toFixed(2)}`);
        } else if (operator === "%"){
            console.log(`${N1} % ${N2} = ${N1 % N2}`);
        }
    }

}

numOperation(["112", 
"0", 
"/"]);
    
    