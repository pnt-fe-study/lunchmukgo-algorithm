function solution(s) {
    const numList = s.split(" ").sort((a, b) => a - b);
    return numList[0] + " " + numList[numList.length - 1];
}
