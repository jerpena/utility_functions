export const log = content => {
    console.log(content)
}

// formats string to proper case. Ex. properCase('reAdMe'), //Readme 
export const properCase = string => {
    return `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`;
}

// querySelector with scope. Ex1. select('#div') //document.querySelector('#div')
// Ex2. const navBar = select('#nav') 
//      const navLinks = select('ul', navBar) 
export const select = (selector, scope = document) => {
    return scope.querySelector(selector);
}

// querySelectorAll with scope. Ex1. selectAll('div') //document.querySelectorAll('div') 
export const selectAll = (selector, scope = document) => {
    return [...scope.querySelectorAll(selector) ];
}

// addEventListener wrapper
// Ex. listen(body, 'click', log) // <body></body> tag in console
export const listen = (target, event, callback, capture = false) => {
    target.addEventListener(event, callback, !!capture)
}

// Global event listener
export const globalListen = ( type, selector, callback, options, scope = document ) => {
    scope.addEventListener(type, event => {
        if (event.target.matches(selector)) callback(event)
    },
    options
    )
}

// sanitize input / escape characters
// Ex. const dirtyInput = "<script>alert('test)</script>"
// log(sanitizeInput(dirtyInput))
export const sanitizeInput = inputValue => {
    const div = document.createElement('div');
    div.textContent = inputValue;
    return div.innerHTML;
}

// Create element with optional attributes
export const createElement = (tag, options = {}) => {
    const element = document.createElement(tag);
    Object.entries(options).forEach(([key, value]) => {
        if (key === 'class') {
            element.classList.add(value)
            return
        }

        if (key === 'dataset') {
            Object.entries(value).forEach(([dataKey, dataValue]) => {
                element.dataset[dataKey] = dataValue;
            })
            return
        }

        if (key === 'text') {
            element.textContent = value;
            return
        }

        element.setAttribute(key, value);
    })
    return element;
}

// Add class to element with optional query scope. Ex. addCLass('#nav', 'bg-primary')
export const addClass = (selector, className, scope) => {
    (scope || document).querySelector(selector).classList.add(className);
}


// random number in range
export const randomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// sleep 
export const sleep = (duration) => {
    return new Promise(resolve => {
        setTimeout(resolve, duration)
    })
}


// [ ARRAY UTILS ]


// Get first (n) elements from array
export const first = (array, numOfElements = 1) => {
    if (numOfElements === 1 ) return array[0]
    return array.filter((_, index) => index < numOfElements)
}

// Get last (n) elements from array
export const last = (array, numOfElements = 1) => {
    if (numOfElements === 1 ) return array[array.length - 1]
    return array.filter((_, index) => array.length - index <= numOfElements)
}

// Get random element in array
// this function requires the randomNumberBetween function
export const sample = array => {
    return array[randomNumberBetween(0, array.length - 1)]
}

// get key's value from array of objects. returns array of values
export const pluck = (array, key) => {
    return array.map(element => element[key])
}

// group elements in array by object key 
// returns object with keys and value is array of elements that match the key.
export const groupBy = (array, key) => {
    return array.reduce((group, element) => {
        const keyValue = element[key];
        return { ...group, [keyValue]: [...(group[keyValue] ?? []), element]}
    }, {})
}

console.log(groupBy([{age: 18}, {age: 19}, {age: 18}, {age: 24}, {age: 24}], 'age'))