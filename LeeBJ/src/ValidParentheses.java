/*
 * 프로그래머스 코딩테스트 문제 Lv.2 정답률 높은 순 기준
 * 문제명 : 올바른 괄호
 * 날짜 : 2026 - 04 - 07
 * 풀이 시간 : 53분
 */
public class ValidParentheses {
	public static void main(String[] args) {
		String testCase = "(()(";
        
        boolean answer = solution(testCase);
		System.out.println(answer);
	}
	
	static boolean solution(String s) {
        char[] charArr = s.toCharArray();
        
        int count = 0;
        for (char c : charArr) {
            if (c == '(') {
                count++;
            } else {
                count--;
            }

            // count가 음수면 바로 false 리턴
            if (count < 0) return false;
        }
        
        boolean answer = (count == 0);
        return answer;
    }
}
