function guessMagicNumber(magicNumber, min, max, guess){
    while (guess != magicNumber){
        let userInput = prompt("Guess the Magic Number: 0 - 100");
        let userInt = parseInt(userInput);
        guess = userInt;
        if (guess < magicNumber){
            console.log(`${guess} is too low!`);
        }
        else if (guess > magicNumber){
            console.log(`${guess} is too high!`);
        }
        else {
            console.log(`Congratulations! You guessed the Magic Number (${magicNumber})!`);
            break;
        }

        if (inRange(guess,min,max) == true){
            console.log("Getting warmer...");
        }
    }
}

function inRange(guess, min, max){
    return ((guess-min)*(guess-max) <= 0);
}

function main(){
    let magicNumber = Math.floor(Math.random() * 101);
    let guess = 0;
    let min = (magicNumber - 10);
    let max = (magicNumber + 10);

    guessMagicNumber(magicNumber, min, max, guess);
}