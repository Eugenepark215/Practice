function solution(inputArray) {
  var largetInteger = -Infinity;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] * inputArray[i + 1] > largetInteger) {
      largetInteger = inputArray[i] * inputArray[i + 1];
    }
  }
  return largetInteger;
}

solution([1, 2, 3, 0]);
