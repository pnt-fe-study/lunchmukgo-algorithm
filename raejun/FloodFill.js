/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const queue = [[sr, sc]];
  let cur = 0;
  const row = image.length - 1;
  const col = image[0].length - 1;
  const min = 0;
  const tmp = image[sr][sc];

  if (tmp === color) return image;

  image[sr][sc] = color;

  while (cur < queue.length) {
    const [x, y] = queue[cur];

    if (y + 1 <= col && image[x][y + 1] === tmp) {
      image[x][y + 1] = color;
      queue.push([x, y + 1]);
    }

    if (y - 1 >= min && image[x][y - 1] === tmp) {
      image[x][y - 1] = color;
      queue.push([x, y - 1]);
    }

    if (x + 1 <= row && image[x + 1][y] === tmp) {
      const col = image[0].length - 1;
      image[x + 1][y] = color;
      queue.push([x + 1, y]);
    }

    if (x - 1 >= min && image[x - 1][y] === tmp) {
      image[x - 1][y] = color;
      queue.push([x - 1, y]);
    }

    cur++;
  }

  return image;
};

/* 
문제 풀지 못함.

시간 복잡도는 O(n)이다.

BFS 알고리즘을 이용하여 풀이했다.

BFS를 이용해서 문제를 풀려고 했다. 
2차원 배열의 row와 col이 다소 헷갈렸고 반복문의 조건 설정이 어려웠다. 
if문의 예외 처리를 생각하지 못하여 풀이를 하지 못하였다.
*/
