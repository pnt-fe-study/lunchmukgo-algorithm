var MyQueue = function () {
  function ListNode(value) {
    this.val = value ?? undefined;
    this.next = null;
  }

  this.getNode = function (v) {
    return new ListNode(v);
  };

  this.node = new ListNode(undefined);
  this.head = this.node;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  if (this.node.val === undefined) {
    this.node.val = x;
  } else {
    const newNode = this.getNode(x);

    this.node.next = newNode;
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const value = this.head.val;

  this.head = this.head.next;

  return value;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.head.val;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (this.node === null) return true;
  else return false;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

/* 
문제 풀지 못함.

시간 복잡도는 push, pop, peek, empty 모두 O(1)이다.

링크드 리스트를 이용하여 큐를 구현했다.

링크드 리스트 문제를 풀면서 링크드 리스트로 구현을 하려고 했는데 실패했다. 
문제에서 스택을 2개 사용하라고 했는데, 어떻게 스택을 이용해야 하는지 감이 잡히지 않았다.
당연히 Array의 매서드를 사용하면 안될 줄 알았는데 풀이를 보니 Array의 매서드를 사용해서 풀이하였다.
*/
