/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  let sum = 0;
  let isOdd = true;

  for (const [_, v] of map) {
    if (v % 2 === 0) sum += v;
    else {
      if (isOdd) {
        sum += 1;
      }

      sum += v - 1;
      isOdd = false;
    }
  }

  return sum;
};

/*
27분 걸림

시간 복잡도는 O(n)이다.

HashMap을 이용해서 문제를 풀었다. 
문자열을 순회하면서 각 문자의 개수를 HashMap에 저장했다. 
HashMap을 순회하면서 각 문자의 개수가 짝수인 경우에는 그대로 더해주고, 홀수인 경우에는 1을 더해주고 나머지는 더해주는 방식으로 풀이했다.

문제 이해를 잘못해서 문자를 포함시키면 무조건 다 써야 하는 걸로 이해했다.
짝수는 모두 사용하고 길이가 가장 긴 홀수만 더했더니 실패하였다.
이후 문제를 다시 보니 홀수개 문자도 짝수개 만큼 더하면 된다는 사실을 이해하고 풀이를 완성할 수 있었다.
*/
