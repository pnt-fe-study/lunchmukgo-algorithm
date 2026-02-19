/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) ?? 0) + 1);
    tMap.set(t[i], (tMap.get(t[i]) ?? 0) + 1);
  }

  for (const [key, value] of sMap) {
    const tValue = tMap.get(key);

    if (tValue === undefined) {
      return false;
    }

    if (tValue !== value) {
      return false;
    }
  }

  return true;
};
