let numWins = 0;
const wordBank = ['hack', 'cyber', 'matrix', 'code']

document.write('Wins')
document.write("<br>")

if (numWins > 0) {
    document.write(numWins)
    document.write("<br>")
}

for (let i = 0; i < wordBank.length; i++) {
    let blankWord = '';
    for (let j = 0; j < wordBank[i].length; j++) {
        blankWord += '_ ';
    }
    document.write(blankWord)
    document.write("<br>")

    
    /* Pseudo-code because I ran out of time
        while (word is not guessed) {
            let guessedChars = []
            let userInput = gets user input
            guessedChars.push(userInput)
            for(let k = 0; k < wordBank[i].length; k++) {
                if (wordBank[i].charAt(k) == userInput) {
                    blankWord[k] = userInput;
                }
            }
            if (word is guessed) {
                numWins++
            }
        }
        
        display user input
    */
}