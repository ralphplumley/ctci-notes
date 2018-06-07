// zero matrix

let matrix = [
  [1,2,3,4,5,6],
  [1,2,3,0,5,6],
  [1,2,3,4,5,6]
];

/*
  [1,2,3,0,5,6],
  [0,0,0,0,0,0],
  [1,2,3,0,5,6]
*/

function zeroMatrix(matrix){
  let coordinatesOfZeroes = {};

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        coordinatesOfZeroes[i] = j;
      }
    }
  }

  for (key in coordinatesOfZeroes) {
    for(var i = 0; i < matrix[key].length; i++) {
      matrix[key][i] = 0;
    }

    for (var j = 0; j < matrix.length; j++) {
      matrix[j][coordinatesOfZeroes[key]] = 0;
    }
  }
  
  return matrix;
}

test = zeroMatrix(matrix);
console.log(test);
