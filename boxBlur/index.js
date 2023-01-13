function solution(image) {
  const solution = [];
  for (let i = 0; i < image.length - 2; i++) {
    const matrix = [];
    for (let j = 0; j < image[0].length - 2; j++) {
      const top = image[i][j] + image[i][j + 1] + image[i][j + 2];
      const mid = image[i + 1][j] + image[i + 1][j + 1] + image[i + 1][j + 2];
      const bottom = image[i + 2][j] + image[i + 2][j + 1] + image[i + 2][j + 2];
      matrix.push(Math.floor((top + mid + bottom) / 9));
    }
    solution.push(matrix);
  }
  return solution;
}
const pic =
  [[7, 4, 0, 1],
    [5, 6, 2, 2],
    [6, 10, 7, 8],
    [1, 4, 2, 0]];

solution(pic);
