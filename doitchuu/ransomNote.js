/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = new Map();

    for (let i = 0; i < ransomNote.length; i++) {
        map.set(ransomNote[i], (map.get(ransomNote[i]) || 0) + 1);
    }

    for (let i = 0; i < magazine.length; i++) {
        const value = map.get(magazine[i]);

        if (value) {
            if (value === 1) {
                map.delete(magazine[i]);
            } else {
                map.set(magazine[i], map.get(magazine[i]) - 1);
            }
        }
    }

    return map.size === 0 ? true : false;
};
