'use strict';


class Validator {
/**
 * Method: isValid
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param {any} input
 * @param {function} rules - that defines what do validate
 * @returns {boolean}
 */
  isValid (input1, rules) {
    return rules(input1);
  }

  // OR you could do this (optional):
  // validator.isValid(1, (input2) => {
  //   return typeof input1 === 'number';
  // });

  /**
 * Method: isString?
 * @param input {anything} input - is this input a valid string
 * @returns {boolean}
 */
  string (input) {
    return typeof input === 'string'; //returns Boolean
  }

  /**
 * Method: isNumber
 * @param input
 * @returns {boolean}
 */
  number (input) {
    return typeof input === 'number';
  }

  /**
 * Method: isArray
 * @param input
 * @returns {boolean}
 */
  isArray (input) {//funky
    return Array.isArray(input);
  }

  /**
 * Method: is Object
 * @param input
 * @returns {boolean}
 */
  object (input) {
    return typeof input === 'object';
  }

  /**
 * Method: isBoolean
 * @param input
 * @returns {boolean}
 */
  boolean (input) {
    return typeof input === 'boolean';
  }

  /**
 * Method: isFunction
 * @param input
 * @returns {boolean}
 */
  function (input) {
    return typeof input === 'function';
  }

  /**
 * Are all values in array same type?
 * @param input
 * @returns {boolean}
 */
  //iterate through and check that all elements are same type using sort() and typeof.
  arrayTypesSame (input) {
    const type = typeof input[0];
    for(let i = 1; input.length>0; i++){
      if (typeof input[i] !== type) {
        return false;
      }
      return true;
    }

  }
}


module.exports = Validator;