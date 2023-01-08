function solution(inputArray) {
  let maxDifference = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if ((inputArray[i] - inputArray[i + 1]) > maxDifference) {
      maxDifference = (inputArray[i] - inputArray[i + 1]);
    }
  } return maxDifference;
}

(solution([2, 4, 1, 0]));
