// HOW TO USE ARRAY.MAP!!!!!!!!!
// you create a function that deals with just 1 element in the list
// the map loops the function to every single element 

// QU 1: Multiply all numbers by 2
const nums = [1, 2, 3, 4, 5];

nums.map((num) => num * 2)
console.log(nums.map((num) => num * 2))
// [ 2, 4, 6, 8, 10 ]

function timesTwo(num) {
    return num * 2;
}
console.log(nums.map(timesTwo))
// [ 2, 4, 6, 8, 10 ]

// QU 2: Capitalise first letter of each name
const names = ['mary', 'alice', 'ben', 'andy', 'michelle']

function capitializeFirstLetter(word) {
    return word[0].toUpperCase() + word.slice(1)
}

console.log(capitializeFirstLetter("hello"))
// Hello

console.log(names.map(capitializeFirstLetter))
// [ 'Mary', 'Alice', 'Ben', 'Andy', 'Michelle' ]

// QU 3: Given array of strings, return an array of strings that 
// wraps each string in an HTML-like tag like <p></p> tag

const colours = ['red', 'blue', 'pink', 'green']

function tag(word) {
    return "<p>" + word + "</p>"
}

console.log(tag("Hi"))
// <p>Hi</p>

console.log(colours.map(tag))
// [ '<p>red</p>', '<p>blue</p>', '<p>pink</p>', '<p>green</p>' ]

const paragraphs = colours.map((colour) => {
    return `<p>${colour}</p>` // NOTE THESE ARE BACKTICKS  ` NOT QUOTES ' OR "
})

console.log(paragraphs)
// [ '<p>red</p>', '<p>blue</p>', '<p>pink</p>', '<p>green</p>' ]

// can make even more consise
const hello = colours.map((colour) => `<p>${colour}</p>`) 

console.log(hello)
// [ '<p>red</p>', '<p>blue</p>', '<p>pink</p>', '<p>green</p>' ]

