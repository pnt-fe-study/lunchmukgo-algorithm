function solution(n) {
    const maxIndex = Math.ceil(n / 2);
    let index = 1;
    let result = 1;
    
    while (index < maxIndex) {
        let sum = 0;

        for (let i = index; i <= maxIndex; i++) {
            sum += i;

            if (sum === n) {
                result++;
                break;
            }
            
            if (sum > n) {
                break;
            }
        }
        
        sum = 0;
        index++;
    }
    
    return result;
}
