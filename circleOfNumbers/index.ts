type solutionType = (n: number, firstNumber: number) => number;

let solutionFunction: solutionType;
// eslint-disable-next-line no-unused-vars
solutionFunction = function solution(n, firstNumber) {
  const number = ((n / 2) + firstNumber);
  if (number > n) {
    return number - n;
  } else if (number === n) {
    return 0;
  }
  else {
    return number;
  }
}

export { }
