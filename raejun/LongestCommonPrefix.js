/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const checkChar = (strs, c, index) => {
    return strs.every((str) => str[index] === c);
  };

  if (strs.length === 1) {
    return strs[0];
  }

  let answer = "";

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    if (checkChar(strs, char, i)) {
      answer += char;
    } else {
      break;
    }
  }

  return answer;
};

/*
14분 걸림.

시간 복잡도는 O(N x M) N은 문자열의 개수, M은 공통 접두사를 확인하기 위해 보는 문자 수이다.
공간 복잡도는 O(1)이다. answer 문자열의 길이는 공통 접두사의 길이까지 될 수 있기 때문이다.

strs 배열의 첫 번째 문자열을 기준으로 공통 접두사를 확인하는 방식으로 풀이했다.
checkChar 함수를 만들어서, strs 배열의 모든 문자열이 index 위치에서 char와 같은지 확인하는 방식으로 풀이했다.
strs 배열의 첫 번째 문자열을 순회하면서, checkChar 함수를 이용해서 공통 접두사를 확인했다. 
공통 접두사가 맞으면 answer에 char를 더해주고, 공통 접두사가 아니면 반복문을 종료했다.


복쟙하게 생각하지 않고 주어진 조건에 대해 풀이했다.
strs 배열의 첫 번째 문자열을 기준으로 공통 접두사를 확인하는 방식이 가장 직관적인 풀이인 것 같다.
*/
