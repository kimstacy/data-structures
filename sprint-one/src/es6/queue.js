class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(count, first, last, storage) {
    this.count = 0;
    this.first = 0;
    this.last = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.last++] = value;
    this.count++;
  }

  dequeue() {
    if (this.count > 0) {
      var removed = this.storage[this.first];
      delete this.storage[this.first++];
      this.count--;
      return removed;
    }
  }

  size() {
    return this.count;
  }
}