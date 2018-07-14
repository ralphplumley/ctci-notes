/*
Robot in a grid
*/

// BRUTE FORCE O( 2^(x+y) )

let get_path_brute = function(grid) {
  if (grid.length === 0 || !grid) {
    return null;
  }

  debugger;

  let path = [];

  if (helper_brute(grid, grid.length - 1, grid[0].length - 1, path) === true) {
    return path;
  }

  return false;
}

let helper_brute = function(grid, row, col, path) {
  if(row < 0 || col < 0 || grid[row][col] === 'x') {
    return false;
  }

  // if at origin, then path has made it all the way
  if ( (row === 0 && col === 0) || helper_brute(grid, row-1, col, path) || helper_brute(grid, row, col-1, path) ) {
    path.push([row, col]);
    return true;
  }

  return false;
}
  
/* TEST */

var grid = [
  ['0', 'x', '0', '0'],
  ['0', '0', '0', 'x'],
  ['x', '0', '0', '0'],
  ['0', '0', 'x', '0']
];

console.log(get_path_brute(grid));