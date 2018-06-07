// Given two strings, write a method to decide if one is a permutation of the other
// O(n) ?
// O(n log n) ?
// Could a hash table be useful?

// Method 1 - use sorting O(n log n)

// Method 2 - count characters O(n)

let foo = 'abcde';
let bar = 'xdcba';

function isAnagram(a, b) {
  countA = {};
  countB = {};

  for (i = 0; a[i] && b[i];  i++) {

    if (countA.hasOwnProperty(a[i])) {
      countA[a[i]]++;
    } else {
      countA[a[i]] = 1;
    }

    if (countB.hasOwnProperty(b[i])) {
      countB[b[i]]++;
    } else {
      countB[b[i]] = 1;
    }
  }

  for (var i = 0; i < a.length; i++) {
    if (countA[a[i]] != countB[a[i]]) {
      return false;
    }
  }
  
  return true;
  
}

console.log(isAnagram(foo, bar));