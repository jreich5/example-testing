Ten Functions
=================

Click `Show` in the header to run the app live. Updates to your code will instantly deploy and update live.
  

## The "Ten Functions" Exercises
0. The comments to the right of the function call demonstrate the output value of the function's operation on the provided input.
1. Define a function named `isTrue` that takes in any input and returns true if the input provided is exactly equal to `true` in value and `boolean` in data type.
        
        isTrue(true)             // true
        isTrue(false)            // false
        isTrue(0)                // false
        isTrue(null)             // false
        isTrue("true")           // false
        isTrue("Banana")         // false
        isTrue([1, 2])           // false

2. Define a function named `isFalse` that takes in a value and returns a boolean if the argument provided is a boolean value or not.
        
        isFalse(false)             // true
        isFalse(true)              // false
        isFalse(0)                 // false
        isFalse(null)              // false
        isFalse("")                // false
        isFalse("Banana")          // false
        isFalse([1, 2])            // false

3. Define a function named `not` that takes in any input and returns the boolean opposite of the provided input.
        
        not(true)                   // false
        not(false)                  // false
        not(0)                      // true
        not("something")            // false
        not("")                     // true
        not(null)                   // true
        not(undefined)              // true
        not(Infinity)               // false
        not(123)                    // false
    
4. Define a function named `and` that takes in two inputs and returns the value of both 

        
        isBoolean(true, true)             // true
        isBoolean(false, true)            // true
        isBoolean()                // false
        isBoolean(null)             // false
        isBoolean("")               // false
        isBoolean("Bob")            // false
        isBoolean([1, 2])           // false

## Hints

Consider this example problem.

> Write a function called `isBoolean` that takes in a value and returns a boolean if the argument provided is a boolean value or not.
>
> `isBoolean("Dog")` should return `false` because a string is not a boolean
>
> `isBoolean(false)` should return `true` because only true and false are boolean values.

- When a problem says `return`, it means `return`, not `console.log`.

- When a problem says that a function will take in an input, then it means the function must be defined so that it takes in an argument as its input, rather than relying on variables defined outside the function.

The following example is incorrect because the function does not take in an argument. It's modifying a global variable, and that is not the same as accepting an input as an argument.

```js
var input = "Grace Hopper"
function isBoolean() {
    return typeof input == "boolean";
}
```

This is incorrect because the function doesn't return the output. Functions that do not have an explicit `return` statement return `undefined` by default.

```js
function isBoolean(input) {
    console.log(typeof input == 'boolean');
}
```

Correct solution:

```js
function isBoolean(input) {
    return typeof input == "boolean";
}
```



Made by [Ryan Orsinger](https://ryanorsinger.glitch.me/)
-------------------

\ ゜o゜)ノ
