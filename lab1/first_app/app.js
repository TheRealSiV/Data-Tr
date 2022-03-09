function printValue(divId, value){
    document.getElementById(divId).innerText = value;
}

let counter = 0;

printValue("counter", 0);

document.getElementById("increment").addEventListener("click", increment);
document.getElementById("decrement").addEventListener("click", decrement);

function increment(){
    if(counter < 10) {
        counter++;
        printValue("counter", counter);
    }
}

function decrement(){
    if(counter > 0) {
        counter--;
        printValue("counter", counter);
    }
}