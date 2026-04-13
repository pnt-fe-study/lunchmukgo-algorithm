/*
 * 프로그래머스 코딩테스트 문제 Lv.2 정답률 높은 순 기준
 * 문제명 : 최솟값 만들기
 * 날짜 : 2026 - 04 - 10
 * 풀이 시간 : 12분
 * 시간복잡도: O(n log n)
 * 공간복잡도: O(1)
 */
import java.util.Arrays;

public class FindingMinVal {
	public static void main(String[] args) {
		int[] testA = {2, 7, 9, 120};
        int[] testB = {11, 26, 250, 33};
        
        int answer = solution(testA, testB);
		System.out.println(answer);
	}
	
	static int solution(int[] A, int[] B) {
        int answer = 0;

        Arrays.sort(A);
        Arrays.sort(B);

        for (int i=0; i < A.length; i++) {
            answer += A[i] * B[B.length-i-1];
        }

        return answer;
    }
}
