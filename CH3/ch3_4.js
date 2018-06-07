// Implement a MyQueue class which implements a queue using two stacks.

// Similar to Tower of Hanoi ...
// A queue means FIFO. 

/*

|5| | |
|4| | |
|3| | | 
|2| | |
|1| | |  <--- so, use second stack to get the first element.

| | | |
| | |2|
| | |3| 
| | |4|
|1| |5|  <--- so, use second stack to get the first element.

but then we have to put everything from stack 2, back to stack 1 ...

*/