var hasCycle = function (head) {
  const visited = new Set();
  let cur = head;

  while (cur !== null) {
    if (visited.has(cur)) {
      return true;
    }

    visited.add(cur);
    cur = cur.next;
  }

  return false;
};
