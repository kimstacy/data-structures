var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var first = 0;
  var last = 0;

  // Implement the methods below

  someInstance.enqueue = function (value) {
    storage[last++] = value;
    count++;
  };

  someInstance.dequeue = function () {

    if (count > 0) {
      var removed = storage[first];
      delete storage[first++];
      count--;
      return removed;
    }
  };

  someInstance.size = function () {
    return count;
  };

  return someInstance;
};