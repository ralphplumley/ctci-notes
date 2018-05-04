// URLify

// EX:
// I: "Mr Jhon Smith    ", 13
// O: "Mr%20John%20Smith"

function urlify(input, stringLength) {
  debugger;
  let output = '';

  for(var i = stringLength - 1; i >= 0; i--) {
    let currentCharacter = input[i];
    if (currentCharacter === ' ') {
      output = '%20' + output;
    } else {
      output = currentCharacter + output;
    }
  }

  return output;
}

let input = "Mr John Smith    ";
let stringLength = 13;

console.log(urlify(input, stringLength));

