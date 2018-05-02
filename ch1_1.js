// Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additonal data structures?

let input1 = 'abcdefghijklmn';
let input2 = 'abcadefg';

function isAllUnique(s) {
  debugger;
  let output = {};

  for (var i = 0; i < s.length; i++) {
    let character = s[i];
    if(output.hasOwnProperty(character)) {
      return false;
    } else {
      output[character] = 1;
    } 
  }

  return true;
}

// console.log(isAllUnique(input2));

// Solve in O(n log n) time

// Bit-vector