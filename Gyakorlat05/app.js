let random = Math.floor(Math.random() * 1000001);
const max = 20;
for(let i = 0; i < max; i++){
    let input;
    do{
        input = prompt("kérek egy számot 0 és 1 000 000 között: ");
        input = parseInt(input, 10);
    }while(isNaN(input) || input < 0 || input > 1000000);

    if(input === random){
        alert(`Gratulálok, ${i+1}. lépésből eltaláltad!`);
        break;
    }
    else if(input < random){
        alert(`${i+1}. tipp nem talált: A megoldás nagyobb.`);
    }
    else{
        alert(`${i+1}. tipp nem talált: A megoldás kisebb.`);
    }

    if(i === max - 1){
        alert("Sajnos ez most nem sikerült!");
    }
}