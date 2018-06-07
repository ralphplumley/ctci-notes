// remove dups

// fn checkDuplicates
// fn print

let isItADuplicate = function(head, node) {
  var currNode = head;
  while (currNode !== node) {
    if (currNode.value === node.value) {
      return true;
    }
    currNode = currNode.next;
  }
  return false;
};

let removeDuplicates1 = function(node) {
  while( node !== null ) {
    if (node.next !== null && !isItADuplicate(node, node.next)) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return node;
}

let logToOutput = function(node) {
  console.log('start of linked list');
  while (node !== null) {
    console.log(node.value);
    node = node.next;
  }
  console.log('end of linked list');
}

var linkedList = function(value) {
  this.value = value;
  this.next = null;
}

var a = new linkedList('a');
var b = new linkedList('b');
var c = new linkedList('c');
var d = new linkedList('d');
var e = new linkedList('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

let foo = removeDuplicates1(a);
logToOutput(foo);
