/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const sArr = s
    .toLowerCase()
    .split("")
    .filter(
      (s) =>
        (48 <= s.charCodeAt() && s.charCodeAt() <= 57) ||
        (97 <= s.charCodeAt() && s.charCodeAt() <= 122),
    );

  let len = sArr.length - 1;

  for (let i = 0; i <= len; i++) {
    if (sArr[i] !== sArr[len - i]) return false;
  }

  return true;
};

/* 
20분 걸림.

시간 복잡도는 O(n)이다.

알파벳과 숫자만 남기고 모두 제거한 후, 양 끝에서부터 하나씩 비교해가며 팰린드롬인지 확인하는 방식으로 풀이했다.

평소 정규표현식에 대한 지식이 있다면 더 간단하게 풀이할 수 있었을 것 같다.
매서드가 익숙지 않아 시간 다소 걸렸지만, 풀이 자체는 어렵지 않았다.
*/
