/*
 * 프로그래머스 코딩테스트 문제 Lv.2 정답률 높은 순 기준
 * 문제명 : 숫자의 표현
 * 날짜 : 2026 - 04 - 19
 * 풀이 시간 : 13분
 * 시간복잡도: O(n^2)
 * 공간복잡도: O(1)
 */
public class TwoPointer {
	public static void main(String[] args) {
        int n = 15;
        int answer = solution(n);
		System.out.println(answer);
	}
	
    static int solution(int n) {
        int answer = 0;
        
        // i 변수에서 0을 더해봤자 의미없기에 1부터 시작하여 반복문 수행
        for (int i=1; i<=n; i++) {
            int sum = 0;
            for (int j=i; j<=n; j++) {
                sum += j;
                
                // sum이 n과 같아지면 카운트를 올려주고 반복문 종료
                if (sum == n) {
                    answer++;
                    break;
                } else if (sum > n) {
                    break;
                }
            }
        }
        
        return answer;
    }
}
