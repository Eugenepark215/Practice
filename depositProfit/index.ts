type solutionType = (deposit: number, rate: number, threshold: number) => number;

let functionSolution: solutionType;
functionSolution = function (deposit, rate, threshold) {
  let i = 0;
  do {
    i++;
    deposit += deposit * (rate / 100);
  } while (deposit > threshold)
  return i;
}

functionSolution(100, 20, 170);

export { }
