function solution(inputArray) {
  let change = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] > inputArray[i + 1]) {
      change += ((inputArray[i] - inputArray[i + 1]) + 1);
      inputArray[i + 1] += ((inputArray[i] - inputArray[i + 1]) + 1);
    } else if (inputArray[i] === inputArray[i + 1]) {
      inputArray[i + 1] += 1;
      change += 1;
    }
  } return change;
}

const newInputArray = [-1000, 0, -2, 0];
solution(newInputArray);
