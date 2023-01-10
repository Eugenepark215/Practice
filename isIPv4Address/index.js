function solution(inputString) {
  const inputArray = inputString.split('.');
  if (inputArray.length !== 4) {
    return false;
  }
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] > 255) {
      return false;
    }
  }
  return true;
}

(solution('280.100.92.101'));
