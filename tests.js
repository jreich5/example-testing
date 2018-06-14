"use strict";

/** 
 * Tests for the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
 

const randomBoolean = Boolean(Math.round(Math.random()))
const randomNumber = Math.ceil(Math.random() * 100)

describe('isTrue', () => {
  it('should be a defined function', () => {
    expect(typeof isTrue).toBe('function')
  })
  it('should return a boolean value', () => {
    expect(isTrue(typeof isTrue(randomBoolean)).toBe('boolean'))
  })
  it('should return true when passed the boolean true', () => {
    expect(isTrue(true)).toBe(true)
  })
  it('should return false when passed the boolean false as the input', () => {
    expect(isTrue(false)).toBe(false)
  })
  it('should return false when passed a number as the input', () => {
    expect(isTrue(randomNumber)).toBe(false);
  })
  it('should return false when passed a string as input', () => {
    expect(isTrue("hello world")).toBe(false);
  })
})