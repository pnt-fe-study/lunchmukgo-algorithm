/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map();

  for (const char of ransomNote) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  for (let i = 0; i < magazine.length; i++) {
    const char = magazine[i];

    if (map.has(char)) {
      if (map.get(char) === 1) {
        map.delete(char);
      } else {
        map.set(char, map.get(char) - 1);
      }
    }

    if (map.size === 0) return true;
  }

  return false;
};

/*
21분 걸림.

시간 복잡도는 O(n)이다. n은 magazine의 길이이다.

ransomNote에 있는 문자들의 개수를 map에 저장한다.
magazine을 탐색하면서 map에 있는 문자들을 제거해나간다. 
만약 map이 비게 되면 true를 반환한다.

처음에 문자 개수를 상관하지 않아도 된다고 생각해서 Set으로 접근했다.
하지만, 같은 문자가 여러 개 있을 수 있기 때문에 Set으로는 풀이할 수 없었다. 그래서 Map으로 접근했다.
*/
