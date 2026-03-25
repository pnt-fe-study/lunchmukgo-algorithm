/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const stack1 = [];
  const stack2 = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (s[i] === "#") {
      if (stack1.length) {
        stack1.pop();
      }
    } else {
      stack1.push(char);
    }
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];

    if (t[i] === "#") {
      if (stack2.length) {
        stack2.pop();
      }
    } else {
      stack2.push(char);
    }
  }

  return stack1.join("") === stack2.join("");
};

/*
16분 걸림.

시간 복잡도는 O(n + m)이다. n과 m은 각각 s와 t의 길이이다.
공간 복잡도는 O(n + m)이다. stack1과 stack2의 크기는 각각 s와 t의 길이까지 될 수 있기 때문이다.

stack을 이용해서 문제를 풀었다.
stack에 문자를 넣다가 #이 나오면 stack에서 pop을 해주었다.
stack1과 stack2를 만들어서 각각 s와 t를 처리해주었다.
마지막에 stack1과 stack2를 문자열로 만들어서 비교해주었다.


처음에 문제 이해하는데 시간이 좀 걸렸다.
backspace를 space로 착각했다.
문제를 제대로 이해하고 나서 stack을 이용해서 문제를 풀었다.

O(n)의 풀이를 보면 뒤에서부터 비교해가면서 #이 나오면 #과 그 앞의 문자를 건너뛰는 방식으로 풀이한다.
while 문을 중첩을 하는데 O(n)으로 나오는 걸 보고 
*/
