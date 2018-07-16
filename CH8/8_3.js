/*
Magic Index
*/

let magicIndex = function(arr, startIndex = null, midIndex = null, endIndex = null) {
  debugger;
  if (!midIndex) {
    startIndex = 0;
    midIndex = Math.floor(arr.length / 2);
    endIndex = arr.length - 1;
  }

  if (midIndex === startIndex || midIndex === endIndex) {
    return null;
  }

  if (arr[midIndex] === midIndex) {
    return midIndex;
  }

  if (arr[midIndex] > midIndex) {
    // right
    startIndex = midIndex;
    endIndex = endIndex;
    midIndex = Math.floor( (midIndex + endIndex) / 2);
  } else if (arr[midIndex] < midIndex) {
    // left
    startIndex = startIndex;
    endIndex = midIndex;
    midIndex = Math.floor( (startIndex + endIndex) / 2);
  }

  return magicIndex(arr, startIndex, midIndex, endIndex);

}

//             INDEX
//         0 1 2 3 4 5  6
let arr = [4,4,4,4,4,12,13];
//                 ^
console.log(magicIndex(arr));
