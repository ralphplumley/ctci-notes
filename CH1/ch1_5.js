// One away

/*
pale, ple -> true
pale, ple -> true
pale, ple -> true
pale, ple -> false
*/

// If the difference is greater than 1
  // return false

// Check if number of string's characters differ by 1
// Check if strings only have 1 letter different

function oneAway(string1, string2) {

  let checkOneMissing = function(first, second) {
    if ( first.length !== second.length -1) {
      return false;
    } else {
      let alreadyMissingOne = false;
      var firstPointer = 0;
      var secondPointer = 0;

      while (firstPointer < first.length) {
        if (first[firstPointer] !== second[secondPointer]) {
          if (alreadyMissingOne) {
            return false;
          } else {
            alreadyMissingOne = true;
            secondPointer++;
          }
        } else {
          // both characters are the same
          // so move on to next one
          firstPointer++;
          secondPointer++;
        }
      }
      // return true after we've exhausted the strings
      return true;
    }
  }

  let checkForDifferences = function(first, second) {
    if ( first.length !== second.length -1) {
      return false;
    } else {
      let alreadyMissingOne = false;
      var firstPointer = 0;
      var secondPointer = 0;

      while (firstPointer < first.length) {
        if (first[firstPointer] !== second[secondPointer]) {
          if (alreadyMissingOne) {
            return false;
          } else {
            alreadyMissingOne = true;
          }
        } else {
          // both characters are the same
          // so move on to next one
          firstPointer++;
          secondPointer++;
        }
      }
      // return true after we've exhausted the strings
      return true;
    }
  }

  return checkOneMissing(string1, string2) || checkOneMissing(string2, string1) || checkForDifferences(string1, string2);

}

let test1 = oneAway('pale', 'ple');
let test2 = oneAway('pales', 'pale');
let test3 = oneAway('pale', 'bale');
let test4 = oneAway('pale', 'bake');
console.log(test3);
