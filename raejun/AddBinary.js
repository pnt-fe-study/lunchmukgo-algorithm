/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const aLen = a.length;
  const bLen = b.length;
  const len = aLen > bLen ? aLen : bLen;
  let num = 0;
  const arr = [];

  for (let i = 1; i <= len; i++) {
    if (a.at(-i) === "1" && b.at(-i) === "1") {
      arr.push(0 + num);
      num = 1;
    } else if (a.at(-i) === "1" || b.at(-i) === "1") {
      if (num === 1) {
        arr.push(0);
        num = 1;
      } else {
        arr.push(1);
        num = 0;
      }
    } else {
      if (num === 1) {
        arr.push(1);
        num = 0;
      } else {
        arr.push(0);
        num = 0;
      }
    }
  }

  return (num === 1 ? "1" : "") + arr.reverse().join("");
};

/*
26분 걸림.

시간 복잡도는 O(n)이다.

문자열을 뒤에서부터 순회하면서 풀이했다.
a와 b의 길이를 구해서, 더 긴 문자열의 길이만큼 루프를 돌면서 풀이했다. 
a와 b의 각 자리 숫자를 비교하면서, 1과 1이 나오면 0을 arr에 push하고 num을 1로 업데이트했다.
1과 0이 나오면, num이 1이면 arr에 0을 push하고 num을 1로 업데이트했다. 
num이 0이면 arr에 1을 push하고 num을 0으로 업데이트했다. 
0과 0이 나오면, num이 1이면 arr에 1을 push하고 num을 0으로 업데이트했다. 
num이 0이면 arr에 0을 push하고 num을 0으로 업데이트했다.
루프가 끝난 후에, num이 1이면 "1"을 반환값의 앞에 붙이고, arr를 뒤집어서 문자열로 만들어서 반환한다.

풀이가 생각보다 어려웠다. 십진수를 이진수로 이진수를 십진수로 변환하는 함수를 만들어서 풀어도 될 것 같다.
배열에 push하는 방식말고 뭔가 다른 방식으로 풀이할 수 있을 것 같은데 생각이 나지 않는다.
*/
