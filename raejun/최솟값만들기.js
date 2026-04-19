function solution(A, B) {
  var answer = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}

/*
풀이 시간: 4분

시간 복잡도는 O(n log n)이다.
공간 복잡도는 O(1)이다.

배열 A는 오름차순으로 정렬하고, 배열 B는 내림차순으로 정렬했다.
그 다음에, 배열 A와 배열 B의 요소들을 순회하면서, 각 요소들을 곱해서 answer에 더했다.

눈치껏 최솟값과 최댓값을 곱하는 방식으로 풀이했다.
근데 왜 그게 최솟값이 되는지는 잘 모르겠다.
*/
