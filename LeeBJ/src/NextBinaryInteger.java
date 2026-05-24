/*
 * 프로그래머스 코딩테스트 문제 Lv.2 정답률 높은 순 기준
 * 문제명 : 다음 큰 숫자
 * 날짜 : 2026 - 04 - 19
 * 풀이 시간 : 48분
 * 시간복잡도: O(k log n)
 * 공간복잡도: O(log n)
 */
public class NextBinaryInteger {
	public static void main(String[] args) {
        int n = 78;
        int answer = solution(n);
		System.out.println(answer);
	}
	
    static int solution(int n) {
        int answer = 0;
        int count = binary(n);
        int index = 1;

        while (true) {
            int number = n + index; // n보다 1 큰 숫자부터 시작하여 반복문 수행

            // 이진수로 변환하여 이진수 내에 1의 갯수가 같으면 해당 숫자를 리턴하고 반복문 종료
            if (count == binary(number)) {
                answer = number;
                break;
            }

            index++; // 조건에 부합하지 않으면 index를 1씩 증가시켜서 계속 반복
        }

        return answer;
    }

    // 이진수로 변환하여 1의 갯수를 리턴하는 함수
    static int binary(int x) {
        String str = Integer.toBinaryString(x);
        int count = 0;
        char[] strArr = str.toCharArray();
        for (char val : strArr) {
            if (val == '1') count++;
        }
        return count;
    }
}
