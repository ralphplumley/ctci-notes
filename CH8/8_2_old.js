/*
Robot in a grid
*/

let grid4 = [
    ['.','.','x','.'],
    ['x','.','.','.'],
    ['.','.','x','x'],
    ['.','.','.','.']
];

/* solution is:
    [1,1,0,0],
    [0,1,0,0],
    [0,1,0,0],
    [0,1,1,1]
*/

let solutionArray = [];

let getRobotPath = function(n, grid, row, col, solutionArray) {

    // If we're at the end, store in our solution and return true
    if (row === n-1 && col === n-1) {
        solutionArray[row][col] = 1;
        return true;
    }

    // Otherwise, let's keep going.
    // Check if it's inbounds in the grid
    if (inBounds(grid, row, col) === true) {
        solutionArray[row][col] = 1;

        if (getRobotPath(n, grid, row + 1, col, solutionArray) === true) {
            return true;
        }

        if (getRobotPath(n, grid, row, col + 1, solutionArray) === true) {
            return true;
        }

        solutionArray[row][col] = 0;
        return false;
    }

    return false;

}

let inBounds = function(grid, row, col) {
    if (row === grid.length || col === grid.length) {
        return false;
    }
    return true;
}

getRobotPath();

