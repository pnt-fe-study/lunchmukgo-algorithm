/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1;
    let end = n;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (isBadVersion(mid)) {
        if (!isBadVersion(mid - 1)) return mid;

        end = mid;
      } else start = mid + 1;
    }
  };
};

/*
22분 걸림.

시간 복잡도는 O(log n)이다. n은 버전의 수이다.

1을 start로 n을 end로 두고 이진 탐색으로 풀이했다.

이진 탐색을 통해 특정한 값을 찾는 것만에 익숙해져 있어, 반복문 전에 start와 end가 isBadVersion이면 return을 하는 실수를 했다.
이진 탐색을 사용하는데 계속 시간 초과가 났다. 지피티한테 물어보니 start = mid에 +1을 해줘야 한다고 한다. 
만약 start = 1, end = 2일 때 mid = 1이 된다. 만약 1이 bad version이라면 end = mid가 되어서 end도 1이 된다. 그러면 start와 end가 둘 다 1이 되어서 무한 루프에 빠지는 것이다.
이진탐색에서 범위를 확실히 줄이려면 +1, -1을 해줘야 한다.
*/
