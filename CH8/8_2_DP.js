/*
Robot in a grid
*/

// DYNAMIC PROGRAMMING O(XY)

let get_path = function(grid) {
  if (grid.length === 0 || !grid) {
    return null;
  }

  // debugger;

  let path = [];
  let failed = [];

  if (helper(grid, grid.length - 1, grid[0].length - 1, path, failed) === true) {
    return path;
  }

  return false;
}

let helper = function(grid, row, col, path, failed) {
  if(row < 0 || col < 0 || grid[row][col] === 'x') {
    return false;
  }

  let point = [row, col];

  // if at origin, then path has made it all the way
  if ( (point === [0, 0]) || helper(grid, row-1, col, path, failed) || helper(grid, row, col-1, path, failed) ) {
    path.push(point);
    return true;
  }

  failed.push(point);
  return false;
}
  
/* TEST */

var grid = [
  ['0', '0', '0', '0'],
  ['0', 'x', '0', 'x'],
  ['x', '0', '0', '0'],
  ['0', '0', 'x', '0']
];

console.log(get_path(grid));