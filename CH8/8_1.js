/*
    Triple Step
*/

// Naive: O(3^n) time, O(n) space
let naive_steps = function(n) {
    // debugger;
    if (n < 0) return 0;
    if (n === 0) return 1;
    return naive_steps(n-1) + naive_steps(n-2) + naive_steps(n-3);
}

// Memoization (top-down): O(n) time, O(n) space
let memo_steps = function(n, cache = new Array(n+1)) {
    // debugger;
    if (n < 0) return 0;
    if (n === 0) return 1;
    if (!cache[n]) {
        cache[n] = memo_steps(n-1, cache) + memo_steps(n-2, cache) + memo_steps(n-3, cache);
    } else {
        return cache[n];
    }

    return cache[n];
}

console.log(memo_steps(6));
