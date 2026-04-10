function solution(s) {
  let zero = 0;
  let count = 0;

  while (s !== "1") {
    const len = s.length;

    s = s.replaceAll("0", "");

    const oneCount = s.length;

    s = oneCount.toString(2);

    zero += len - oneCount;
    count++;
  }

  return [count, zero];
}

/*
풀이 시간: 10분

시간 복잡도는 O(n log n)이다.
공간 복잡도는 O(1)이다.

문자열 s가 "1"이 될 때까지 반복하면서, 문자열 s에서 "0"을 제거하고, 남은 "1"의 개수를 구했다. 
그 다음에, "1"의 개수를 이진수 문자열로 변환했다. 
반복할 때마다 제거한 "0"의 개수를 zero에 더했고, 반복한 횟수를 count에 더했다. 
문자열 s가 "1"이 되면, [count, zero]를 반환했다.

문제에서 요구사항을 그대로 구현하면 되는 문제였다.
문자열 메서드를 오랜만에 사용해서 조금 헷갈렸다.
*/
