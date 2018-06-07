// How would you design a stack which, in addition to push and pop, has a function min
// which returns the minimum element? Push, pop and min should all operate in 0(1) time.

// Store minimum value as we push and pop.
// -or-
// Each stack node has a value, and the node with the smallest value below it.
// Then we can ask the top node which node has the smallest value.

ex:
(node_value, smallest_node_below)

Node # 1: (3, node#3)
Node # 2: (5, node#3)
Node # 3: (1, null)
Node # 4: (4, null)
Node # 5: (7, null)