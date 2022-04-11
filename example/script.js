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

const numberArray = [1,2,3,4,5,6,7,8,9,10];
const letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
const people = [
    { name: 'Jason', age: 18 },
    { name: 'Emily', age: 25 },
    { name: 'Sarah', age: 25 },
    { name: 'Claire', age: 22 },
    { name: 'Mike', age: 18 },
    { name: 'Jarvis', age: 45 },
    { name: 'Anthony', age: 48 },
    { name: 'Rebecca', age: 44 },
    { name: 'Rachel', age: 29 }
]

// Get the body tag.
const bodyTag = select('body');

// Get the element with id='console' that is inside the body tag
const consoleDiv = select('#console', bodyTag)

/*******

[ ARRAY UTILS ]

*******/


// [ FIRST ]

log(`First element:
${first(letterArray)}`); // console.log the first element in letterArray.

log(`First 5 elements:
${first(letterArray, 5)}`); // console.log the first 5 elements in letterArray.


// [ LAST ]

log(`Last element:
${last(letterArray)}`);  // console.log the last element in letterArray.

log(`Last 5 elements:
${last(letterArray, 5)}`); // console.log the last 5 elements in letterArray.


// [ SAMPLE ]

log(`Random element:
${sample(letterArray)}`); // console.log random element from letterArray.


// [ PLUCK ]

log(`Pluck: 
${pluck(people, 'name')}`); // console.log all names in people array

log(`${groupBy(people, 'age')}`); // console.log 
