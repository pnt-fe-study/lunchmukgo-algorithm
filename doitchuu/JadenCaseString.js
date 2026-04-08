function solution(s) {
    return s.split(" ").map((char) => {
        if (char.length === 0) return "";
        return char[0].toUpperCase() + char.slice(1).toLowerCase();
    }).join(" ");
}
