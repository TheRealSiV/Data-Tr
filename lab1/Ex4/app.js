

function getFibonacci(n){
    if(typeof n === "undefined" || isNaN(n)) return "not allowed";
    if(n < 1 || n > 10) return "not allowed";
    var f1 = 1;
    var f2 = 1;
    for(let i = 1; i <= n; i++){
        console.log(f1);
        let fib = f1 + f2;
        f1 = f2;
        f2 = fib;
    }
}

getFibonacci(2);
getFibonacci(5);
console.log(getFibonacci());
console.log(getFibonacci('a'));
console.log(getFibonacci(11));