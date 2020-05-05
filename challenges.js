
// Lyft

// Write an algorithm which accepts an array of integers. Each integer represents the
// height of a bar in a bar graph. Your algorithm should calculate how much "water" could 
// be stored in the bar graph.

// function findWater(arr){
//     let total = 0;
//     let highest = 0;
//     let nextHighest = 0;
//     for(i = 0; i <arr.length; i++){
//         if(arr[i] >= highest){
//             highest = arr[i];
//             for(j = i + 1; j < arr.length; j++){
//                 if(arr[j] > nextHighest){
//                     nextHighest = arr[j];
//                 }
//             }
//             if(highest > nextHighest){
//                 highest = nextHighest;
//             }
//         }
//         if(arr[i] < highest){
//             total += (highest - arr[i])
//         }
//         nextHighest = 0;
//     }
//     console.log(total);
// }

// console.log('working?')

// let iterationOne = findWater([0, 10, 12, 6, 8, 4, 0, 0, 3, 0, 4])
// console.log(`The result of the first iteration of the water problem was ${iterationOne}. The correct answer is 15.`)
// let iterationTwo = findWater([1, 1, 2, 1, 2, 3, 0, 1, 0, 3])
// console.log(`The result of the first iteration of the water problem was ${iterationTwo}. The correct answer is 9.`)
// let iterationThree = findWater([3, 0, 3])
// console.log(`The result of the third iteration of the water problem was ${iterationThree}. The correct answer is 3.`)
// let iterationFour = findWater([1, 4, 8, 3, 4, 6, 2])
// console.log(`The result of the third iteration of the water problem was ${iterationFour}. The correct answer is 5.`)
// let iterationFive = findWater([3, 3, 3, 3])
// console.log(`The result of the third iteration of the water problem was ${iterationFive}. The correct answer is 0.`)

// arr = [0,1,0,2,1,0,1,3,2,1,2,1]
// findWater(arr);






// Reddit

// What is the difference between POST and GET?
// Both are used to transfer data from client to server in HTTP but the main difference is
// that GET carries request parameter  in URL while POST carries request parameter in the
// message body

// What are hash tables? Tell me about their runtime.
// A hash table (hash map) is a data structure which implements an associative array
// abstract data type; a structure that can map keys to values


// What is the runtime of your code?
// Runtime describes software/instructions that are executed while your program is running,
// especially those instructions that you did not write explicitly, but are necessary for
// the proper execution of your code

// Write a function that finds the median of 2 sorted lists.

// let arr1 = [-5, 3, 6, 12, 15];
// let arr2 = [-12, -10, -6, -3, 4, 10];


// function findMedianOfTwoArrays(){
//     newArr = []
//     while (arr1.length || arr2.length){
//         if (arr1[0] > arr2[0]){
//             newArr.push(arr2.shift())
//         }else{
//             newArr.push(arr1.shift())
//         }
//     }
//     if (newArr.length % 2){
//         // If odd
//         return newArr[Math.floor(newArr.length / 2)]
//     }else{
//         // If even
//         let sumOfMiddle = newArr[newArr.length / 2] + newArr[newArr.length / 2 -1];
//         return sumOfMiddle / 2;
//     }
// }

// console.log(findMedianOfTwoArrays(arr1, arr2));








// Contiguous Sequence: You are given an array of integers (both positive and negative). Find the
// contiguous sequence with the largest sum. Return the sum.
// EXAMPLE
// Input:2, -8 , 3, -2, 4, -10
// Output: 5 (i.e. , {3 , -2, 4} )
// Hints: #53#551, #567, #594, #614

// function getMaxSum(arr){
//     let max = 0;
//     for (let i = 0; i < arr.length; i++){
//         let start = 0;
//         for (let j = i; j < arr.length; j++){
//             start += arr[j];
//             max = Math.max(max, start);
//         }
//     }
//     console.log(max);
//     return max;
// }

// arr = [-2, -1, 1, 10, -6, 14, 7, -6] // 26
// getMaxSum(arr);



// Challenge: 19-flatten
// Difficulty:  Intermediate
// Prompt:
// - Write a function named flatten that accepts a single array that may contain nested arrays and returns a new "flattened" array.
// - A flattened array is an array that contains no nested arrays.
// - Arrays maybe nested at any level.
// - If any of the arrays have duplicate values those duplicate values should be present in the returned array.
// - The values in the new array should maintain their ordering as shown in the examples below.
// Hint:
// - This assignment provides an excellent opportunity to use recursion (a function that calls itself).  It can also be solved by using an inner function.
// Examples:
// flatten( [1, [2, 3]] );
//=> [1, 2, 3]  (a new array) 
// flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] );
//=> [1, 2, 3, 4, 1, 'a', 'b', 'c']
// Your solution for 19-flatten here:

// function flatten(arr) {
//     newArray = []
//     // Base case: No arrays in our array
//     arr.forEach((element) => {
//       if (!Array.isArray(element)) {
//         newArray.push(element)
//       } else {
//         // Action: Flatten the array
//         element.forEach((item) => {
//           newArray.push(item)
//         })
//         return flatten(newArray)
//       }
//     })
//     return newArray;
//   }
//   let iterationOne = flatten( [1, [2, 3]] )
//   let iterationTwo = flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] )
//   console.log(iterationOne)
//   console.log("^^ solution to [1, [2, 3]]")
//   console.log(iterationTwo)
//   console.log("^^ solution to 1, [2, [3, [4]]], 1, 'a', ['b', 'c']]")






// This function returns an array of all possible outcomes from flipping a coin N times.
// Input type: Integer
// For example, coinFlips(2) would return the following:
// ["HH", "HT", "TH", "TT"]
// H stands for Heads and T stands for tails

// function coinFlips(n){
//     let outcomes = Array(Math.pow(2, n)).fill("");
//     let half = Math.pow(2, n) / 2;
//     let flipper = 1;
//     let counter = 0;
//     function flip(half){
//         for(let i = 0; i < Math.pow(2, n); i ++){
//             if(flipper === 1){
//                 outcomes[i] += "H"
//             }else{
//                 outcomes[i] += "T"
//             }
//             counter ++;
//             if(counter === half){
//                 flipper *= -1;
//                 counter = 0;
//             }
//         }
//         if(outcomes[0].length >= n){
//             return outcomes;
//         }
//         return flip(half/2);
//     } 
//     return flip(half);
// }

// runA = coinFlips(2)
// runB = coinFlips(3)
// runC = coinFlips(4)
// runD = coinFlips(20)
// console.log(runA)
// console.log(runB)
// console.log(runC)
// console.log(runD)








// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

// var romanToInt = function(roman) {
//     value = { 
//             'M': 1000, 
//             'D': 500, 
//             'C': 100, 
//             'L': 50, 
//             'X': 10, 
//             'V': 5, 
//             'I': 1
//         }
    
//     number = 0;
    
//     for (let i = 0; i < roman.length; i++){
//         current = value[roman[i]];
//         next = value[roman[i + 1]];
//         if (current < next){
//             number += next - current;
//             i++;
//         }else{
//             number += current;
//         }
//     }   
//     return number;
// };






// Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

var intToRoman = function(num) {
    let value = {
            'M': 1000, 
            'CM': 900,
            'D': 500, 
            'CD': 400,
            'C': 100, 
            'XC': 90,
            'L': 50, 
            'XL': 40,
            'X': 10,
            'IX': 9,
            'V': 5, 
            'IV': 4,
            'I': 1   
        },
        roman = '',
        i;
    
    
    for (i in value){
        while (num >= value[i]){
            roman += i;
            num -= value[i];
        }
    }
    return roman;
};
