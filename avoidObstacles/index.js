function solution(inputArray) {
  for (let i = 1; ;i++) {
    if (inputArray.every(element => element % i)) {
      return i;
    }
  }
}
solution([5, 3, 6, 7, 9]);
