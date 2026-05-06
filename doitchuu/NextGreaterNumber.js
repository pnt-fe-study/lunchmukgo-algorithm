function solution(n) {
    const oneCount = countOne(n);
    let answer = n + 1;
    
    while (true) {
        const newOneCount = countOne(answer);
        
        if (newOneCount === oneCount) {
            break;
        }
            
        answer++;
    }
    
    return answer;
}

function countOne(num) {
    return num.toString(2).replace(/0/g, "").length;
}
