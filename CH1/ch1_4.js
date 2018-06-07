// Palindrome Permutation

// I:  Tact Coa
// O: true 

function isPalindrome(input) {
  let tally = {};
  let hasPivotCharacterAlready = false;

  for(var i = 0; i < input.length; i++ ) {

    if (input[i] === ' ') {
      continue;
    }

    let currentCharacter = input[i];
    if (tally.hasOwnProperty(currentCharacter)) {
      if(hasPivotCharacterAlready) {
        return false;
      } else {
        hasPivotCharacterAlready = true;
        tally[currentCharacter]++;
      }
    } else {
      tally[currentCharacter] = 1;
    }
  }

  return true;
}

console.log(isPalindrome('Tact Coa')); // true
