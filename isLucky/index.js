function solution(n) {
  const numberString = n.toString();
  const half = numberString.length / 2;
  let firstHalf = 0;
  let secondHalf = 0;
  for (let i = 0; i < half; i++) {
    firstHalf += parseInt(numberString[i]);
  }
  for (let j = numberString.length - 1; j >= half; j--) {
    secondHalf += parseInt(numberString[j]);
  }
  if (firstHalf === secondHalf) {
    return true;
  } else {
    return false;
  }
}

const input = 1230;
solution(input);
