"use strict";


// consider the following error message



// consider the following function that is meant to test other functions...
function assert(callback, specDescription, input, expectedOutput) {

    // call the passed function and store in a result
    var result = callback(input);

    // build the string for the possible fail message
    var failMessage = "%c"
        + specDescription
        + " ===== FAILED: \n\tan input of "
        + input
        + " did not return "
        + expectedOutput
        + "\n\t"
        + result
        + " was returned instead";

    // build the string for the pass message
    var passMessage =" %c" + specDescription + " ===== PASSED";

    // compare the expected result with the actual result and log the outcome
    if (result !== expectedOutput) {
        console.log(failMessage, "color : red");
    } else {
        console.log(passMessage, "color: green");
    }

}

// here is a very simple pure function to test
function increaseNumByTwo(num) {
    return parseFloat(num) + 2;
}


// running the test...
assert(increaseNumByTwo, "it should increase a numeric input by two", 2, 4);

// lets run a few more tests...
assert(increaseNumByTwo, "it should return false if any input is not numeric", "bob", false);
assert(increaseNumByTwo, "it should return 5.5 if passed 3.5", 3.5, 5.5);
assert(increaseNumByTwo, "it should return 10 if passed the string '8'", '8', 10);

