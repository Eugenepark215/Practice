function solution(inputArray) {
  const newArray = [];
  let longest = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length >= longest) {
      longest = inputArray[i].length;
      if (inputArray[i].length === longest) {
        newArray.push(inputArray[i]);
      }
    }
  }
  return newArray;
}
const input = ['aba', 'aa', 'ad', 'vcd', 'aba'];
solution(input);
