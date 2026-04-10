function solution(s) {
  const arr = s.split(" ").map((n) => Number(n));
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return min.toString() + " " + max.toString();
}

/*
풀이 시간: 7분

시간 복잡도는 O(n)이다.
공간 복잡도는 O(n)이다.

문자열을 공백으로 분리해서 배열로 만들고, 배열의 요소들을 숫자로 변환했다.
그 다음에, Math.min과 Math.max를 사용해서 배열에서 최솟값과 최댓값을 구했다.
마지막으로, 최솟값과 최댓값을 문자열로 변환해서 공백으로 연결해서 반환했다.

정답률이 높은 순으로 풀다 보니 초반 문제는 쉽게 풀 수 있을 것 같다.
후반으로 갈수록 점점 더 어려워질 텐데 걱정이다.
쉬운 문제와 어려운 문제를 섞어서 풀어야 할지 고민이 된다.
*/
