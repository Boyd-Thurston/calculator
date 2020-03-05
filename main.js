// define global var
// var for entries, empty array -- assume for capturing equastion entered
// var for total, number -- assume running total for displaying answer when called
// var for temp, empty string -- assume string content display for visable input on HTML

// define outer event function for when buttons are clicked 
    // first check - checking for legal number !isNAN or for '.' to create float number
        // push to temp
    // second check - checking if value is 'AC'
        // reset global var to starting val
    // third check - checking if value is 'CE'
        // rest temp var only to starting val
    // fourth check - checking if value is 'x'
        // pushing * to entries
        // pushing 'x' to temp
    // fith check - checking if value is 'devison symbol'
        // pushing / to entries
        // pushing 'devison symbol' to temp
    // sith check - checking if value is '='
        // pushing '=' to temp
        // calling fucntion to calculate answer
            // check to se if nevgative
                // if so adds '-' to the front of number display in HTML input field
            // push answer to HTML input field
    // else -  add numbers/normal operators to temp
    