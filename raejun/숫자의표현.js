function solution(n) {
  var answer = 1;

  if (n === 1) return 1;

  for (let i = Math.ceil(n / 2); i >= 0; i--) {
    let sum = 0;

    for (let j = i; j >= 0; j--) {
      sum += j;

      if (sum > n) {
        break;
      } else if (sum === n) {
        answer++;
        break;
      }
    }
  }

  return answer;
}

/*
풀이 시간: 16분

시간 복잡도는 O(n^2)이다.
공간 복잡도는 O(1)이다.

n이 1인 경우에는 1을 반환했다.
그 다음에, n의 절반부터 0까지 루프를 돌면서, i부터 0까지 루프를 돌면서, sum에 j를 더했다. 
만약 sum이 n보다 크면, 내부 루프를 종료했다. 
만약 sum이 n과 같으면, answer를 1 증가시키고, 내부 루프를 종료했다. 
루프가 끝난 후에는 answer를 반환했다.

천장에서 아래로 내려오면서 더하는 방식으로 풀이했는데 n이 1인 경우 예외 처리를 찾지 못해서 오래 걸렸다.
DP로 풀이하는 방법도 있을 것 같고, for문은 한 번만 도는 방법도 있을 것 같은데 한 번 찾아봐야겠다.
*/
