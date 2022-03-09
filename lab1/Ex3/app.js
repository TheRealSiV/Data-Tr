document.getElementById("n").addEventListener('input', inputSum);

function inputSum(){
    let inputNumber = parseInt(document.getElementById("n").value);
    sum(inputNumber);
}

function sum(n) {
    if (typeof n === 'undefined') {
        return "n is undefined";
    }

    if(isNaN(n)){
        return "not a number";
    }

    let sum = 0;

    for(let i = 1; i <= n; i++)
    {
        sum += i;
    }

    return sum;
}

