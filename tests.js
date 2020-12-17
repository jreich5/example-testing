"use strict";

// can include normal JS code in file containing unit tests
// generating random values will be helpful in testing various functions
const randomBoolean = Boolean(Math.round(Math.random()));
const randomNumber = Math.ceil(Math.random() * 100);

describe('concat', function() {
  it('should be a defined function', function() {
    expect(typeof concat).toBe('function');
  })
  it('should return a string when passed to strings', function() {
    expect(typeof concat("hello", "world")).toBe('string')
  })
  it('should return "helloworld" when passed "hello" and "world" as the two inputs.', function() {
    expect(concat("hello", "world")).toBe("helloworld");
  })
  it('should return "Codeup" when passed "Code" and "up" as the two inputs', function() {
    expect(concat("Code", "up")).toBe("Codeup")
  })
  it('should return "42" when passed the number 4 and 2, treating each input as a string', function() {
    expect(concat(4, 2)).toBe("42")
  })
  it('should return "truetrue" when passed true and true', function() {
    expect(concat(true, true)).toBe("truetrue")
  })
}) 
