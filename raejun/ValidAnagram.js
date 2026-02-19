/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  s = s
    .split("")
    .sort((a, b) => a.charCodeAt() - b.charCodeAt())
    .join("");
  t = t
    .split("")
    .sort((a, b) => a.charCodeAt() - b.charCodeAt())
    .join("");

  return s === t;
};

/*
4분 걸림.

시간 복잡도는 O(nlogn)이다.

문자열을 문자 단위로 나눈 후, 알파벳 순서대로 정렬한 다음 다시 문자열로 합쳐서 두 문자열이 같은지 비교하는 방식으로 풀이했다.

*/
