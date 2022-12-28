function solution(inputArray) {
  const newArray = [];
  let longest = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length >= longest) {
      longest = inputArray[i].length;
    }
    if (inputArray[i].length === longest) {
      newArray.push(inputArray[i]);
    }
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j].length !== longest) {
        newArray.splice(j, 1);
      }
    }
  }
  return newArray;
}
const input = ['abc',
  'eeee',
  'abcd',
  'dcd'];
solution(input);
