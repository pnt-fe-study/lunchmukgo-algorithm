/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const mapped = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let num = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (mapped[s[i]] >= mapped[s[i + 1]]) {
      num += mapped[s[i]];
    } else {
      num -= mapped[s[i]];
    }
  }

  return num + mapped[s.at(-1)];
};

/*
26분 걸림.

시간 복잡도는 O(n)이다.

문자열을 순회하면서, 현재 문자와 다음 문자를 비교하여, 현재 문자가 다음 문자보다 크거나 같으면 num에 더하고, 그렇지 않으면 num에서 뺐다.
마지막 문자에 대해서는 순회가 끝난 후에 num에 더했다.

문제를 다소 어렵게 생각했다.
뭔가 특정한 규칙이 있을 것 같아 규칙을 찾는 것에 집중하다보니 시간을 많이 소모했다.
문제에서 뺼셈이 될 수 있는 경우가 정해져있기 때문에 많은 경우의 수를 고려할 필요가 없었다.
*/
