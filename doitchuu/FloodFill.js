var floodFill = function (image, sr, sc, color) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const original = image[sr][sc];
  if (original === color) return image;

  const rows = image.length;
  const cols = image[0].length;

  const queue = [[sr, sc]];
  image[sr][sc] = color; // 방문 처리(색칠) 먼저

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let dir = 0; dir < 4; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];

      if (nx < 0 || ny < 0 || nx >= rows || ny >= cols) continue;
      if (image[nx][ny] !== original) continue;

      image[nx][ny] = color;
      queue.push([nx, ny]);
    }
  }

  return image;
};
