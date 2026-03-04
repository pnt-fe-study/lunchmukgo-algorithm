/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return climbStairs(n - 1) + climbStairs(n - 2);
};

/*
문제 풀지 못함.

시간 복잡도는 O(2^n)이다.

재귀 알고리즘을 이용하여 풀이했다.

재귀 알고리즘을 이용해서 문제를 풀려고 했다. 
재귀 알고리즘은 풀이가 간단하지만 시간 복잡도가 O(2^n)으로 매우 비효율적이다. 
다른 사람들의 풀이를 보니 DP로 푼 것이 시간 복잡도 측면에서 더 효율적으로 나왔다.
 */
