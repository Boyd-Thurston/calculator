// define global var
var entries = [];
var total = 0;
var temp = '';

// listener for buttons being clicked 
document.addEventListener("click",getButtonEntry)

// gathers value of button pressed and call follow on function
function getButtonEntry(event) {
    if(event.target.matches("button")){
        let value = event.target.value;
        processButtonEntry(value);
    }
}

// process button entry to add to array or call answer/reset functions
function processButtonEntry(value){
    if(!isNaN(value) || value == "."){
        temp += value;
        updateDisplay();
    } else if(value == 'AC'){
        entries = [];
        setTempToEmpty();
        updateDisplay();
    } else if (value == 'CE'){
        setTempToEmpty();
        updateDisplay();
    } else if (value == '='){
        entries.push(temp);
        getAnswer(value);        
    } else if(value == '%'){
        entries.push(temp);
        getAnswer(value);
    } else {
        entries.push(temp);
        entries.push(value);
        setTempToEmpty();
    }
}


// function to update display
function updateDisplay(){
    let display = document.getElementById("display");
    display.value = temp;
}

// function to clear temp variable
function setTempToEmpty(){
    temp = ''
}

// calculates answer from based on values in array and type of answer requested('=' or '%')
function getAnswer(value){
    total = Number(entries[0]);
    entries.shift();
    while(entries.length > 0){
        let i = entries[0]
        let j = getSecondNumber(value)
        switch(i){
            case '+':
                total += j;
                break;
            case '-':
                total -= j;
                break;
            case 'x':
                total *= j;
                break;
            case '÷':
                total /= j;
                break;
        }
        entries.shift();
        entries.shift();
    }
    temp = total;
    updateDisplay();
}

// modifies second value depending on if equation is simple or %
function getSecondNumber(value){
    if(value == '='){
      return Number(entries[1])
    } else if (value == '%'){
        return (total * Number(entries[1]) / 100);
    }
}
