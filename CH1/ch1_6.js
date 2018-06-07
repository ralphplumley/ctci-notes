// String Compression

// aabcccccaaa => a2b1c5a3

function stringCompression(string) {
  let output = '';
  let charCount = 1;

  for (var i = 0; i < string.length; i++) {
    if (string[i+1] !== string[i]) {
      output = output + string[i] + charCount.toString();
      charCount = 1;
    } else {
      charCount += 1;
    }
  }

  return output;
}

let test = stringCompression('aabcccccaaa');
console.log(test);
