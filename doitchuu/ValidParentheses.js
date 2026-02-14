
/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  if (s.length % 2 !== 0) {
      return false;
  }

  let count = 0;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
      if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
          stack.push(s[i]);
          count++;
          continue;
      }

      if (stack[stack.length - 1] === "(" && s[i] === ")") {
          stack.pop();
      }

      if (stack[stack.length - 1] === "{" && s[i] === "}") {
          stack.pop();
      }

      if (stack[stack.length - 1] === "[" && s[i] === "]") {
          stack.pop();
      }
  }

  return stack.length > 0 && count !== (s.length / 2) ? false : true;
};
