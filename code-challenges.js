// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// // Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// // // Expected output: 9

// // Pseudo code: Input needs to be the two arrays, and I will need to concatenate them to create a new array
//                 //Output will be the size of the array, not the sum.

//  const numberOfWorldSeries = (array1, array2) => {
//         let newArray = array1.concat(array2)
//         return newArray

//  }               
// console.log(numberOfWorldSeries(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns).length)
// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

// const currentCohort = "LEARN 2023"
// // // Expected output: "3202 NRAEL"

// // // Pseudo code: Input will be the string currentCohort and turn into an array.
//                     //Output, I will need to split the array then reverse function, and then join. I return the new array on the console log to print the array in reverse.

    // const reverseString = (string) => {
    //     let newArray = string.split("").reverse()
    //     reverseArray = newArray.join("")
    //     return reverseArray
    // }
    // console.log(reverseString(currentCohort))
// // --------------------3) Use a for loop to log only the odd numbers from the array using the test variable provided below.
// // Pseudo code: input: I will need to create a function that takes the given array and examines each index to see if it is even or odd. 
                    //output: I will need to create a new array that accept a new index if it meets the %2 !==0 parameter in the loop. 

// const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]


// const oddNumbers = (array) => {
//     let newArr = []
//     for(i=0; i < array.length; i++){
//         if(array[i] %2 !== 0){
//             newArr.push(array[i])
//         }
//     }
//     return newArr
// }

// console.log(oddNumbers(stockExchange))
// // Expected output: 13 5 -5 27
