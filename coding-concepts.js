// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: this will add the element "indigo" to the end of the array colors, then print to the console log.
// b) Verify and explain: It printed the size of the array after pushing the element "indigo"

// --------------------1) What will this log?

// const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer:This is will print the length of the string cohort to the console log.
// b) Verify and explain: It printed the length of the string, which was 10.

// --------------------2) What will this log?

// const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: This will log the 4th index of the string greeting, which is "o"
// b) Verify and explain: It printed the 4th index which was o

// --------------------3) What will this log?

// const languages = ["JavaScript", "Ruby", "Python", "C++"]
// const index = 1
// console.log(languages[index])

// a) Your answer: The array languages will take the value of index and print the elment at the 1st index which is "Ruby"
// b) Verify and explain: It print the 1st index which was Ruby

// --------------------4) What will this log?

// const weekendDays = ["saturday", "sunday"]
// const upperCase = weekendDays.toString().toUpperCase().split(",")

// console.log(upperCase)

// a) Your answer: This will print the array weekendDays in all upper case because of the ToUpperCase function.
// b) Verify and explain: I received a TypeError because ToUpperCase is a function for strings, not arrays. I would need to convert the array into a string, then toUpperCase, and a split function.

// --------------------5) What will this log?

// const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: typeof function is to display the operand value in a string. It should log the string values.  
// b) Verify and explain: It returned the value "number," because typeof function checks for one of nine data types, and .length is a "number" data type, or the size of the array which is 3.
