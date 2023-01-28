function solution(matrix) {
  const board = [];
  for (let i = 0; i < matrix.length; i++) {
    board.push([]);
    for (let j = 0; j < matrix[0].length; j++) {
      board[i][j] = 0;
      if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][j]) {
          board[i][j]++;
        }
      }
      if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][j]) {
          board[i][j]++;
        }
      }
      if (matrix[i][j - 1] !== undefined) {
        if (matrix[i][j - 1]) {
          board[i][j]++;
        }
      }
      if (matrix[i][j + 1] !== undefined) {
        if (matrix[i][j + 1]) {
          board[i][j]++;
        }
      }
      if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][j - 1]) {
          board[i][j]++;
        }
      }
      if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][j + 1]) {
          board[i][j]++;
        }
      }
      if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][j - 1]) {
          board[i][j]++;
        }
      }
      if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][j + 1]) {
          board[i][j]++;
        }
      }
    }
  }
  return board;
}

const example = [[true, false, false],
  [false, true, false],
  [false, false, false]];

solution(example);
