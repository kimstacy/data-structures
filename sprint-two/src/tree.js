var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value)); // add value to children array
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  // for loop will account for the 'else if''
  for (var i = 0; i < this.children.length; i++) {
    // new var
    var child = this.children[i];
    // recursion is going to take place below
    if (child.contains(target)) {
      return true;
    }
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?

treeMethods.addChild - Constant O(1)
treeMethods.contains - Linear O(n)

 */
