function salary(input){
    const nTabs = Number(input[0]);
    let salary = Number(input[1]);

    for(let j = 0; j <= nTabs; j++ ){
        let currentWebsite = input[j + 2];
        if(currentWebsite === "Facebook"){
            salary -= 150;
        } else if (currentWebsite === "Instagram"){
            salary -= 100;
        } else if (currentWebsite === "Reddit"){
            salary -= 50;
        }

        if(salary <= 0){
            break;
        }

    }

    if(salary <= 0){
        console.log("You have lost your salary.");
    } else {
        console.log(salary);
    }
}

salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])
    
    