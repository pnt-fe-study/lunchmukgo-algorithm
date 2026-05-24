function solution(n) {
  var answer = 0;

  const findOneCount = (number) => {
    return number
      .toString(2)
      .split("")
      .filter((n) => n === "1").length;
  };

  const nCount = findOneCount(n);

  let findNum = n + 1;

  while (42) {
    if (findOneCount(findNum) === nCount) return findNum;

    findNum++;
  }
}

/*
풀이 시간: 31분

시간 복잡도는 O(n log n)이다.
공간 복잡도는 O(1)이다.

n의 1의 개수를 구하는 findOneCount 함수를 정의했다. 
그 다음에, n보다 큰 수를 하나씩 증가시키면서, findOneCount 함수로 1의 개수를 구해서, n의 1의 개수와 비교했다. 
만약 두 개수가 같으면, 그 수를 반환했다.

처음에는 n의 이진수를 구해서 이진수를 가지고 구해보려고 했는데, 깊은 생각이 요구될 것 같아 그냥 하나씩 증가시키면서 구하는 방법으로 풀이했다.
*/
