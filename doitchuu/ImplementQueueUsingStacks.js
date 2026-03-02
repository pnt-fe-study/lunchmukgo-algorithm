var MyQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.outStack.length === 0) {
    while (this.inStack.length) {
      this.outStack.push(this.inStack.pop());
    }
  }

  return this.outStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.outStack.length === 0) {
    while (this.inStack.length) {
      this.outStack.push(this.inStack.pop());
    }
  }

  const lastIndex = this.outStack.length - 1;
  return this.outStack[lastIndex];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  const hasInStackValues = this.inStack.length !== 0;
  const hasOutStackValues = this.outStack.length !== 0;

  return !hasInStackValues && !hasOutStackValues ? true : false;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
