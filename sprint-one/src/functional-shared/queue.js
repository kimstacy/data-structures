var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueObj = {
    count: 0,
    first: 0,
    last: 0,
    storage: {},
  };
  _.extend(queueObj, queueMethods);
  return queueObj;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.last++] = value;
  this.count++;
};

queueMethods.dequeue = function () {
  if (this.count > 0) {
    var removed = this.storage[this.first];
    delete this.storage[this.first++];
    this.count--;
    return removed;
  }
};

queueMethods.size = function () {
  return this.count;
};