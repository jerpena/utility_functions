import {
    first,
    last,
    sample,
    pluck,
    groupBy,
    sleep,
    randomNumberBetween,
    addClass,
    createElement,
    sanitizeInput,
    globalListen,
    listen,
    select,
    selectAll,
    properCase,
    log
} from "../Utils.js";

const unformattedName = 'jOhN dOe'
const badInput = "<script>window.alert('test)</script>"
let idCounter = 0;
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
const people = [
    { name: 'Jason', age: 18 },
    { name: 'Emily', age: 25 },
    { name: 'Sarah', age: 25 },
    { name: 'Claire', age: 22 },
    { name: 'Mike', age: 18 },
    { name: 'Jarvis', age: 45 },
    { name: 'Anthony', age: 45 },
    { name: 'Rebecca', age: 45 },
    { name: 'Rachel', age: 29 }
]

const bodyTag = select('body'); // Get the body tag.
const button = select('#clickme') // Get the clickme button
const addButton = select('#addBtn') // Get the addBtn button
const consoleDiv = select('#console', bodyTag); // Get element with id='console' inside the body tag
const allDivs = selectAll('div'); // Get array of all div elements on page.
const allListItemsInNav = selectAll('p', consoleDiv); // Get Array of all p elements in consoleDiv

const listenCallback = event => {
    log('You clicked the "clickme" button!'); // log to console
}


const createNewButton = () => {
    idCounter++
    const options = { // Set options for the createElement function.
        class: 'btn',
        text: `New btn (${idCounter})`,
        dataset: { btnId: idCounter },
        id: idCounter,
        "data-new": true
    }

    const newBtn = createElement('button', options) // Create Element with options
    select('.button-wrapper').append(newBtn) // Append element to button=wrapper
}

const logClickedButton = () => {
    console.log(`This globalListen function only works in the button-wrapper`)
}

const outputToConsoleDiv = () => {
    const paraElements = [];
    for (let i = 1; i < 20 + 1; i++) {
        const html = `<p>Paragraph element: ${i}</p>`
        paraElements.push(html)
    }
    consoleDiv.innerHTML = paraElements.join('\n')
}

listen(button, 'click', listenCallback) // addEventListener for the button variable
listen(addBtn, 'click', createNewButton) // addEventListener for addBtn

// create a listener for all click events in the element with the .button-wrapper
// class. If the element clicked has the class of .btn, execute logClickedButton
globalListen('click', '.btn', logClickedButton, {}, select('.button-wrapper'))

addClass('#console', 'added-with-addClass-function') // add a class to the div with id='console'

sleep(5000).then(() => outputToConsoleDiv()) // Run function after 5 seconds.


log('Random # between 10-20:\n', randomNumberBetween(10, 20)) // get a random number
log('Bad input:\n', badInput) // log the badInput
log('Sanitized input:\n', sanitizeInput(badInput)) // escape bad characters in input.
log('Proper case:\n', properCase(unformattedName)) // Convert text to proper name case.
log('First element:\n', first(letterArray)); // Get first element in letterArray. 
log('First 5 elements:\n', first(letterArray, 5)); // Get New array with first 5 elements of letterArray.
log('Last element:\n', last(letterArray)); // Get last element in letterArray.
log('Last 5 elements:\n', last(letterArray, 5)); // Get New Array with last 5 elements of letterArray.
log('Random element:\n', sample(letterArray)); // Get random element in letterArray.
log('Pluck:\n', pluck(people, 'name')); // Get new array of values from 'name' key.
log('Group By:\n', groupBy(people, 'age')); // Get new object with the age as key and the value as
// an array of objects that matches the age
