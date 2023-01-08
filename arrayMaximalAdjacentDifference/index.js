function solution(inputArray) {
  let maxDifference = inputArray[0] - inputArray[1];
  for (let i = 0; i < inputArray.length; i++) {
    if ((inputArray[i] - inputArray[i + 1]) > (inputArray[i + 1] - inputArray[i]) && (inputArray[i] - inputArray[i + 1]) > maxDifference) {
      maxDifference = (inputArray[i] - inputArray[i + 1]);
    } else if ((inputArray[i + 1] - inputArray[i]) > (inputArray[i] - inputArray[i + 1]) && (inputArray[i + 1] - inputArray[i]) > maxDifference) {
      maxDifference = (inputArray[i + 1] - inputArray[i]);
    }
  } return maxDifference;
}

solution([-1, 4, 10, 3, -2]);
