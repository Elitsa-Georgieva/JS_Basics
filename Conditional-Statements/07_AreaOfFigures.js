function solve(input){
    const TYPE_OF_FIGURE = input[0];

    let area = 0;

    if(TYPE_OF_FIGURE === "square"){
        let a = Number(input[1]);
        
        area = a * a;

    }else if(TYPE_OF_FIGURE === "rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);

        area = a * b;

    }else if(TYPE_OF_FIGURE === "circle"){
        let r = Number(input[1]);

        area = Math.PI * r * r;
       
    }else{
        let a = Number(input[1]);
        let h = Number(input[2]);

        area = 0.5 * a * h;

    }

    console.log(area.toFixed(3));
}

solve(["square", "5"]);
solve(["rectangle", "7", "2.5"]);
solve(["circle", "6"]);
solve(["triangle", "4.5", "20"]);