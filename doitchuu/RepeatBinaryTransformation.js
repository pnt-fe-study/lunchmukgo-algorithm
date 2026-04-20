function solution(s) {
    if (s === "1") {
        return [0, 0];
    }

    let count = 0;
    let zeroCount = 0;
    
    while (s !== "1") {
        const length = s.replaceAll("0", "").length;
        zeroCount += s.length - length;
        s = length.toString(2);
        count++;
    }
    
    return [count, zeroCount];
}
