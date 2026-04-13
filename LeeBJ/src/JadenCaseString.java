/*
 * 프로그래머스 코딩테스트 문제 Lv.2 정답률 높은 순 기준
 * 문제명 : JadenCase 문자열 만들기
 * 날짜 : 2026 - 04 - 06
 * 풀이 시간 : 23분
 */
public class JadenCaseString {
	public static void main(String[] args) {
		String testCase = "3people unFollowed me";
        
        String answer = solution(testCase);
		System.out.println(answer);
	}
	
    static String solution(String s) {
        char[] arr = s.toCharArray();
        
        boolean isStart = true;
        
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == ' ') {
                isStart = true;
            } else {
                if (isStart) {
                    arr[i] = Character.toUpperCase(arr[i]);
                    isStart = false;
                } else {
                    arr[i] = Character.toLowerCase(arr[i]);
                }
            }
        }
        
        String answer = new String(arr);
        return answer;
    }
}
