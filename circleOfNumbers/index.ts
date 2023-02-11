type solutionType = (n: number, firstNumber: number) => number;

let solutionFunction: solutionType;
solutionFunction = function solution(n, firstNumber) {
  const number = ((n / 2) + firstNumber);
  if (number > n) {
    return number - n;
  } else if (number === n) {
    return 0;
  } else {
    return number;
  }
}
solutionFunction(10, 2);
export { }
