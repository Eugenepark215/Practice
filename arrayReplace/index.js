function solution(inputArray, elemToReplace, substitutionElem) {
  const newArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) {
      newArray.push(substitutionElem);
    } else {
      newArray.push(inputArray[i]);
    }
  }
  return newArray;
}

solution([1, 2, 1], 1, 3);
