class LinkedList {
    constructor(inititalValue) {
        if (inititalValue === undefined) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.makeNode(inititalValue);
            this.tail = this.head;
        }
    }
};

LinkedList.prototype.makeNode = function(value) {
    var node = {};
    node.value = value;
    node.next = null;
    return node;
};

LinkedList.prototype.addToTail = function(value) {
    var newTail = this.makeNode(value);
    if (!this.head) {
        this.head = newTail;
    }

    if (this.tail) {
        this.tail.next = newTail;
    }

    this.tail = newTail;
}

LinkedList.prototype.contains = function(targetValue) {
    debugger;
    var node = this.head;

    while (node) {
        if (node.value === targetValue) {
            return true;
        } else {
            node = node.next;
        }
    }

    return false;
}

LinkedList.prototype.removeHead = function() {
    if (this.head) {
        var toReturn;
        
        if (this.head === this.tail) {
            toReturn = this.head.value;
            this.head = null;
            this.tail = null;
            return toReturn;
        } else {
            toReturn = this.head.value;
            this.head = this.head.next;
            return toReturn;
        }
    } else {
        return null;
    }
}

LinkedList.prototype.removeTail = function() {
    debugger;
    var node = this.head;
    var prev = null;
    while (node) {
        if (node.next === null) {
            prev.next = null;
            this.tail = prev;
            return this.value;
        } else {
            prev = node;
            node = node.next;
        }
    }
}


let myLinkedList = new LinkedList(5);
myLinkedList.addToTail(14);
myLinkedList.addToTail(77);
// myLinkedList.removeHead();

console.log(myLinkedList.contains(14));