/**
 * Write a function deepEqual that takes two values and returns true only if they are the same value or 
 * are objects with the same properties, where the values of the properties are equal 
 * when compared with a recursive call to deepEqual.
 */

// Your code here.
function deepEqual(obj1, obj2){
    if (obj1 === obj2 && obj1.keys === obj2.keys) return true;
    else return false;
  }
  let obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → true

/**
 * Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 
 * Also write a listToArray function that produces an array from a list. Then add a helper function prepend, 
 * which takes an element and a list and creates a new list that adds the element to the front of the input list, 
 * and nth, which takes a list and a number and returns the element at the given position in the list 
 * (with zero referring to the first element) or undefined when there is no such element. 
 * If you haven’t already, also write a recursive version of nth.
 */

  function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }
  
  function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }
  
  function prepend(value, list) {
    return {value, rest: list};
  }
  
  function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }
  
  console.log(arrayToList([10, 20, 30, 40, 50]));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 2));
  // → 20

/**
 * write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, 
 * takes an array as argument and produces a new array that has the same elements in the inverse order. 
 * The second, reverseArrayInPlace, does what the reverse method does: 
 * it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
 */


  // Your code here.
function reverseArray(arr){
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    };
    return newArr;
  };
  
  function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
  }
  
  
  console.log(reverseArray(["A", "B", "C", "D"]));
  // → ["C", "B", "A"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]