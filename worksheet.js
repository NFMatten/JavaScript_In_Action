// Variables //

// Task 1: Days of the week
function dayOfWeek(){
    let dayOfWeek = 'Monday';
    console.log(dayOfWeek);
    dayOfWeek = 'Friday';
    console.log(`I can't wait for ${dayOfWeek}!`);
}
// Task 2: User input
function userInput(){
    let animalInput = prompt("What's your favorite animal?");
    let colorInput = prompt("What is your favorite color?");
    console.log(`I've never seen a ${colorInput} ${animalInput}`);
}



// Conditionals //

// Favorite breakfast: Eggs over-easy
// Favorite lunch: ham sandwich
// Favorite dinner: buffalo chicken

// Task 1: Meals
function meals(){
    // let timeOfDay = 700;
    // let timeOfDay = 1230;
    let timeOfDay = 1800;

    let favoriteMeal;

    if (timeOfDay < 1200){
        favoriteMeal = "Eggs Over-Easy";
        console.log(`Time is ${timeOfDay}, Breakfast is ${favoriteMeal}`);
    }
    else if (timeOfDay >= 1200 && timeOfDay < 1700){
        favoriteMeal = "Ham Sandwich";
        console.log(`Time is ${timeOfDay}, Lunch is ${favoriteMeal}`);
    }
    else if (timeOfDay >= 1700) {
        favoriteMeal = "Buffalo Chicken";
        console.log(`Time is ${timeOfDay}, Dinner is ${favoriteMeal}`);
    }
    else {
        console.log('An error occured');
    }
}

// Task 2: Random Number
function randomNumber() {
    let ranNum = Math.floor(Math.random() * 11);

    if (ranNum >= 2) {
        console.log(`Beatles (${ranNum})`);
    }
    else if (ranNum > 2 && ranNum <= 5) {
        console.log(`Stones (${ranNum})`);
    }
    else if (ranNum > 5 && ranNum <= 8) {
        console.log(`Floyd (${ranNum})`);
    }
    else {
        console.log(`Hendrix (${ranNum})`);
    }
}

// "For" Loops //

// Task 1: Print message 7 times
function printMessageSevenTimes(){
    let message = "JavaScript is cool!"
    for (let i = 0; i < 7; i++){
        console.log(message);
    }
}

// Task 2: Print 0 - 10
function zeroThruTen(){
    for (let i = 0; i < 11; i++){
        console.log(i);
    }
}

// Task Three: Write a loop that will print 'hello' 'goodbye' 5 times
function helloGoodbye(){
    for (let i = 0; i < 5; i++){
        console.log("hello");
        console.log("goodbye");
    }
}

// Functions //

// Task 1: Print favorite movie (void functions)
function favoriteMovie(){
    let favMovie = "Interstellar";
    console.log(favMovie);
}

// Task 2: Favorite band (return functions)
function userInputFavBand(){
    let favoriteBand = prompt("Please enter your favorite band.");
    return favoriteBand;
}

function printFavoriteBand(userFavBand){
    alert(`Your favorite band is ${userFavBand}`);
}

// Task 3: Concert (parameters)
function concertDisplay(musicalAct){
    let myStreet = prompt("Please enter your street name.");
    alert(`It would be great if ${musicalAct} played a show on ${myStreet}!`);
}

function tasksTwoAndThree(){
    let userFavBand = userInputFavBand();
    printFavoriteBand(userFavBand);
    concertDisplay(userFavBand); 
}

// Arrays //

// Task 1: Desktop Items
let desktopItems = ['desk', 'lamp', 'computer'];
function oneA(){
    console.log(desktopItems[1]);
}

function oneB(){
    desktopItems[desktopItems.length] = 'Infinity Gauntlet';
    for (let i = 0; i < desktopItems.length; i++){
        console.log(desktopItems[i]);
    }
}