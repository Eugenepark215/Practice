function solution(matrix) {
  let counter = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix[j].length; j++) {
      if (matrix[i][j] === 0) {
        break;
      }
      counter += +matrix[j][i];
    }
  }
  return counter;
}
const something = [
  [0, 1, 1, 1],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
];
solution(something);
