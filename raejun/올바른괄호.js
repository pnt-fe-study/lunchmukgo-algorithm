function solution(s) {
  let score = 0;
  let index = 0;

  if (s[0] === ")") return false;

  while (s.length > index) {
    if (s[index] === "(") score++;
    else score--;

    if (score < 0) return false;

    index++;
  }

  return score === 0 ? true : false;
}

/*
풀이 시간: 9분

시간 복잡도는 O(n)이다.
공간 복잡도는 O(1)이다.

문자열을 순회하면서, "("가 나오면 score를 1 증가시키고, ")"가 나오면 score를 1 감소시켰다.
만약 score가 음수가 되는 경우에는 false를 반환했다. 
문자열을 모두 순회한 후에는 score가 0인지 확인해서, 0이면 true를 반환하고, 그렇지 않으면 false를 반환했다.


기존에 풀이 방법을 암기하고 있어서 쉽게 떠올릴 수 있었다.
보통 stack을 이용해서 풀이하는 방법이 있지만, 효율성 면에서 score를 이용해서 풀이하는 방법이 더 좋은 것 같다.
*/
