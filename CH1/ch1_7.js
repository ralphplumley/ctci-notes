// rotate matrix

function rotateMatrix(matrix) {
  debugger;
  if (!matrix || matrix.length === 0 || matrix.length !== matrix[0].length) {
    throw new Error('invalid matrix');
  }

  let len = matrix.length - 1;
  let half = Math.floor(matrix.length / 1);

  // loop through spine / diagonal
  for (let start = 0; start < half; ++start) {

    // loop through x axis
    for (let i = 0; i < len - (start * 2); ++i) {
      let y = start;
      let x = start + i;
      let prev = matrix[y][x];

      // loop through all 4 corners
      for (let j = 0; j < 4; ++j) {
        let nextY = x;
        let nextX = len - y;
        let next = matrix[nextY][nextX];
        matrix[nextY][nextX] = prev;
        prev = next;
        x = nextX;
        y = nextY;
      }
    }

  }

  return matrix;
}

let matrix = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
];

let test = rotateMatrix(matrix);
console.log(test);
