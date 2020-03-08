// define global var
var entries = [];
var total = 0;
var temp = '';


// define outer event function for when buttons are clicked 
document.addEventListener("click",getButtonEntry)

// gathers value of button pressed
function getButtonEntry(event) {
    if(event.target.matches("button")){
        let display = document.getElementById("display")
        let value = event.target.value
        // check if value is a number or a decimal place 
        if(!isNaN(value) || value == "."){
            // concat to temp string
            temp += value;
            // update display
            updateDisplay();
        } else if(value == 'AC'){
            // clear temp, entries and updates display
            entries = [];
            setTempToEmpty();
            updateDisplay();
        } else if (value == 'CE'){
            // clear temp and updates display
            setTempToEmpty();
            updateDisplay();
        } else if (value == '='){
            entries.push(temp);
            getAnswer(value);        
        } else if(value == '%'){
            entries.push(temp);
            getAnswer(value);
        }else {
            // move temp value and opperator value to entries array
            entries.push(temp);
            entries.push(value);
            setTempToEmpty();
            updateDisplay();
        }
    }
}

// function to update display
function updateDisplay(){
    display.value = temp;
}

// function to clear temp variable
function setTempToEmpty(){
    temp = ''
}

// calculates answer from values in array
function getAnswer(value){
    // opening number on equasion
    total = Number(entries[0]);
    entries.shift();
    // check for operator and adjust running total with next number in array as appropreate
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
    // update temp and display
    temp = total;
    updateDisplay();
}

function getSecondNumber(value){
    if(value == '='){
      return Number(entries[1])
    } else if (value == '%'){
        return (total * Number(entries[1]) / 100);
    }
}

// // calculates a percentage answer from values in array
// function getPercentageAnswer(){
//     // opening number on equasion
//     let total = Number(entries[0]);
//     entries.shift();
//     // check for operator and adjust running total with next number in array as appropreate
//     while(entries.length > 0){
//         let i = entries[0];
//         let j = (total * Number(entries[1]) / 100);
//         switch(i){
//             case '+':
//                 total += j;
//                 break;
//             case '-':
//                 total -= j;
//                 break;
//             case 'x':
//                 total *= j;
//                 break;
//             case '÷':
//                 total /= j;
//                 break;
//         }
//         entries.shift();
//         entries.shift();
//     }
//     // update temp and display
//     temp = total;
//     updateDisplay();
//     console.log(entries)
// }