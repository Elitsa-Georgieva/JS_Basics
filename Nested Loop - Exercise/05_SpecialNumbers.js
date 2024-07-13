function solve(input){
let N = Number(input[0]);

let output = '';
    for(let i1 = 1; i1 <= 9; i1++){
        if(N % i1 !== 0) continue;

        for(let i2 = 1; i2 <= 9; i2++){
            if(N % i2 !== 0) continue;

            for(let i3 = 1; i3 <= 9; i3++){
                if(N % i3 !== 0) continue;

                for(let i4 = 1; i4 <= 9; i4++){
                    if(N % i4 !== 0) continue;

                    if(output.length > 0){
                        output += ' ';
                    }

                    output += `${i1}${i2}${i3}${i4}`
                }
            }
        }
    }

    console.log(output);
}

solve(["3"])