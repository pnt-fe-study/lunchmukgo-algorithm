/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    // 홀수는 1개만 사용 가능.
    // 짝수갯수는 모두 사용 가능.
    // 1개 이상의 홀수일 경우, 1개만 남기고 사용 가능 

    // 1. 일단 갯수를 센다. (대, 소문자 구분)
    // 2. 돌아가면서 전체 갯수를 카운트, 중간에 쓸 숫자가 있으면 count X
    const map = new Map();
    let hasOdd = false;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }

    for (const [key, value] of map) {
        if (value % 2 === 0) {
            count += value;
        } else {
            count += value - 1;
            hasOdd = true;
        }
    }

    return hasOdd ? count + 1 : count;
};
