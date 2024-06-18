function solve(input){
    let amountDeposited = Number(input[0]);
    let termOfTheDeposit = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    let annualInterestRateInPercents = annualInterestRate / 100;

    let amountAtTheEndOfTheDepositPeriod = amountDeposited + termOfTheDeposit * ((amountDeposited * annualInterestRateInPercents) / 12);

    console.log(amountAtTheEndOfTheDepositPeriod);
}

solve(["200", "3", "5.7"]);
solve(["2350", "6", "7"]);