class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(count, storage) {
    this.count = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.count] = value;
    return this.count++;
  }

  pop() {
    if (this.count > 0) {
      this.count--;
    }
    return this.storage[this.count];
  }

  size() {
    return this.count;
  }
}