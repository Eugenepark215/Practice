function solution(cell1, cell2) {
  const board = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8
  };
  const board1 = board[cell1[0]] + parseInt(cell1[1]);
  const board2 = board[cell2[0]] + parseInt(cell2[1]);
  return board1 % 2 === board2 % 2;
}

solution('A1', 'A2');
