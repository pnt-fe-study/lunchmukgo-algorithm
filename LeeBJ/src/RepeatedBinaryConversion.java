/*
 * 프로그래머스 코딩테스트 문제 Lv.2 정답률 높은 순 기준
 * 문제명 : 이진 변환 반복하기
 * 날짜 : 2026 - 04 - 13
 * 풀이 시간 : 6분
 * 시간복잡도: O(n)
 * 공간복잡도: O(log n)
 */
import java.util.Arrays;

public class RepeatedBinaryConversion {
	public static void main(String[] args) {
		String str = "110010101001";
        
        int[] answer = solution(str);
		System.out.println(Arrays.toString(answer));
	}
	
	static int[] solution(String s) {
        int tfCnt = 0; // 이진 변환 횟수
        int rzCnt = 0; // 제거된 0의 갯수

        // s가 "1"이 될때까지 반복 (이 문제의 조건에 1이 최소 하나는 있다라는 조건이 있기에 while문 사용이 좋아보임)
        while (!s.equals("1")) {
            int one = 0;
            for (int i=0; i<s.length(); i++) {
                if (s.charAt(i) == '1') {
                    one++;
                } else {
                    rzCnt++;
                }
            }
            s = Integer.toBinaryString(one); // Java에서 사용하는 이진 변환 함수(String 타입으로 리턴)
            tfCnt++;
        }

        int[] answer = {tfCnt, rzCnt};
        return answer;
    }
}
