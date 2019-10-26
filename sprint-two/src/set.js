var Set = function () {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

//method, takes any string and adds it to the set
setPrototype.add = function (item) {
  this._storage[item] = item;
};

// method, takes any string and returns a boolean reflecting whether it can be found in the set
setPrototype.contains = function (item) {
  if (this._storage[item]) {
    return true;
  }
  return false;

};

//method, takes any string and removes it from the set, if present
setPrototype.remove = function (item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?

setPrototype.add - Constant O(1)
setPrototype.contains - Constant O(1)
setPrototype.remove - Constant O(1)
 */
