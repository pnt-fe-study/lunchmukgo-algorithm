/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const result = [];

  for (let i = 0; i <= n; i++) {
    const len = i
      .toString(2)
      .split("")
      .filter((num) => num === "1")
      .join("").length;

    result.push(len);
  }

  return result;
};

/*
7분 걸림.

시간 복잡도는 O(nlogn)이다. n은 입력값이다.
공간 복잡도는 O(n)이다. result 배열의 크기는 n + 1이기 때문이다.

0부터 n까지의 수를 2진수로 바꾼다.
2진수 문자열을 split으로 나누고 filter로 1인 것만 남긴다.
남은 문자열을 join으로 합쳐서 길이를 구한다.
길이를 result 배열에 push한다.

많은 메서드를 이용해서 풀이를 했는데 비트연산을 이용한 점화식 풀이를 보았다.
많은 지식을 알고 있으면 풀이 방법이 다양해지는 것 같다.
*/
