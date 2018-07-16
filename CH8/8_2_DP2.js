/*
Robot in a grid
*/

// DYNAMIC PROGRAMMING O(XY)

let robotGrid = function(grid) {
  debugger;
  if (grid === null || grid.length === 0) {
    return null;
  }

  let path = [];

  let failedCoordinates = {};
  
  if (getPath(grid, grid.length - 1, grid[0].length -1, path, failedCoordinates)) {
    return path;
  }

  return null;
};

let getPath = function(grid, row, col, path, failedCoordinates) {
  // if out of bounds or not available, return
  if (col < 0 || row < 0 || !grid[row][col] || grid[row][col] === 'x') {
    return false;
  }

  let currentCoordinate = [row, col];
  
  // if we've visited this cell already, return
  if (failedCoordinates.hasOwnProperty(currentCoordinate)) {
    return false;
  }

  let isAtOrigin = (row === 0) && (col === 0);

  let stringifiedCurrCoord;

  // if there's a path from the start to my current location, add my location
  if (isAtOrigin
      || getPath(grid, row, col - 1, path, failedCoordinates)
      || getPath(grid, row - 1, col, path, failedCoordinates)) {

        path.push(currentCoordinate);
        
        stringifiedCurrCoord =  currentCoordinate[0]+ ',' + currentCoordinate[1];
        failedCoordinates[stringifiedCurrCoord] = true;

        return true;
  }
  
  stringifiedCurrCoord =  currentCoordinate[0]+ ',' + currentCoordinate[1];
  failedCoordinates[stringifiedCurrCoord] = false;
  
  console.log(failedCoordinates);
  
  return false;
};


var grid = [
  ['0', '0', 'x', 'x'],
  ['x', '0', 'x', 'x'],
  ['x', '0', '0', '0'],
];

console.log(robotGrid(grid));