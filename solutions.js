"use strict";


// ==================== Simple Example Test Function

// function testAFunction(callback, input, expectedOutput) {
//     return callback(input) === expectedOutput;
// }
//
// function returnInputAsOutput(input) {
//     return 'input';
// }
//
// console.log(testAFunction(returnInputAsOutput, 'bob', 'bob'));
// console.log(testAFunction(returnInputAsOutput, 2, 2));
// console.log(testAFunction(returnInputAsOutput, true, true));





// ==================== Fancy Example Test Function

//
// // consider the following function that is meant to test other functions...
// function assert(callback, specDescription, input, expectedOutput) {
//
//     // call the passed function and store in a result
//     var result = callback(input);
//
//     // build the string for the possible fail message
//     var failMessage = "%cFAILED ===== "
//         + specDescription
//         + ": \n\t- an input of "
//         + input
//         + " did not return "
//         + expectedOutput
//         + "\n\t- "
//         + result
//         + " was returned instead";
//
//     // build the string for the pass message
//     var passMessage ="%cPASSED ===== " + specDescription;
//
//     // compare the expected result with the actual result and log the outcome
//     if (result !== expectedOutput) {
//         console.log(failMessage, "color : red");
//     } else {
//         console.log(passMessage, "color: green");
//     }
//
// }



// here is a very simple pure function to test
// function increaseNumByTwo(num) {
//     return (!isNaN(num)) ? Number(num) + 2 : true;
// }
//
// // running the test...
// assert(increaseNumByTwo, "it should increase a numeric input by two", 2, 4);
//
// // lets run a few more tests...
// assert(increaseNumByTwo, "it should return false if any input is not numeric", "bob", false);
// assert(increaseNumByTwo, "it should return 5.5 if passed 3.5", 3.5, 5.5);
// assert(increaseNumByTwo, "it should return 10 if passed the string '8'", '8', 10);


// ==================== Jasmine Tests

// TODO: Create a function, concat, that will take in two inputs and return the inputs concatenated together
