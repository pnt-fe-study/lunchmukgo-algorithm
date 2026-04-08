/*
 * 프로그래머스 코딩테스트 문제 Lv.2 정답률 높은 순 기준
 * 문제명 : 최댓값과 최솟값
 * 날짜 : 2026 - 04 - 06
 * 풀이 시간 : 8분
 */

import java.util.Arrays;

public class MaxValAndMinVal {
	public static void main(String[] args) {
		String testCase = "-2 -1 0 1 2";
		
		String answer = solution(testCase);
		System.out.println(answer);
	}
	
    static String solution(String s) {
        int[] nums = Arrays.stream(s.split(" "))
                           .mapToInt(Integer::parseInt)
                           .toArray();

        int maxVal = Arrays.stream(nums).max().getAsInt();
        int minVal = Arrays.stream(nums).min().getAsInt();
        
        String answer = minVal + " " + maxVal;
        return answer;
    }
}
