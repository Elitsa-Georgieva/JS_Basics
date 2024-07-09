function numEndingIn7(){
    for(let num = 1; num <= 997; num++){
        if(num % 10 === 7){
            console.log(num);
        }
    }
}

numEndingIn7();