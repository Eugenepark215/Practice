function solution(inputString) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let shift = '';
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === 'z') {
      shift += alphabet[0];
    } else {
      shift += alphabet[alphabet.indexOf(inputString[i]) + 1];
    }
  }
  return shift;
}
solution('inpuz');
