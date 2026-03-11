var reverseList = function (head) {
  let temp = null;
  let curr = head;

  while (curr !== null) {
    const next = curr.next;
    curr.next = temp;
    temp = curr;
    curr = next;
  }

  return temp;
};
