function solution(s) {
  const isNumber = (v) => {
    return "0" <= v && v <= "9";
  };

  return s
    .split(" ")
    .map((v) => {
      if (v === "") return "";

      if (isNumber(v[0])) {
        return v.toLowerCase();
      } else {
        const str = v.toLowerCase();
        const first = str[0].toUpperCase();

        return first + str.slice(1, str.length);
      }
    })
    .join(" ");
}

/*
풀이 시간: 21분

시간 복잡도는 O(n)이다.
공간 복잡도는 O(n)이다.

문자열을 공백으로 분리해서 배열로 만들고, 배열의 요소들을 순회하면서, 각 요소의 첫 번째 문자가 숫자인지 확인했다.
만약 첫 번째 문자가 숫자라면, 해당 요소를 소문자로 변환해서 반환했다. 
만약 첫 번째 문자가 숫자가 아니라면, 해당 요소를 소문자로 변환한 뒤에, 첫 번째 문자를 대문자로 변환해서 반환했다. 
마지막으로, 배열의 요소들을 공백으로 연결해서 반환했다.

숫자인지를 확인하는 과정에서 문자열 숫자를 판단해야 되는데 숫자를 판단하고 있었다.
또한, spilt(' ')으로 나누면 맨 앞이 공백이 될 수 있다는 것을 간과하여 시간이 오래 걸렸다.
맨 앞이 숫자거나 문자거나 상관없이 대문자로 만들어도 문제가 없을 것 같다.
*/
