var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // takes a value and adds it to the end of the list
  list.addToTail = function(value) {
    var node = Node(value);

    if (!list.tail) {
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }

    if (!list.head) {
      list.head = node;
    }
  };

  // removes the first node from the list and returns its value
  list.removeHead = function() {
    var removed = list.head;
    delete list.head;
    list.head = removed.next;
    return removed.value;
  };

  // returns boolean reflecting whether or not the passed-in value is in the linked list
  list.contains = function(target) {
    var current = list.head;
    while (current !== null) {
      if (current.value === target) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value; // stores the values
  node.next = null; //points to the next node in the list

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

list.addToTail - Constant O(1)
list.removeHead - Constant O(1)
list.contains - Linear O(n)

 */
