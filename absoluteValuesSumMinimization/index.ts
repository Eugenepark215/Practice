type functionType = (a: number[]) => number;
let functionSolution: functionType;
functionSolution = function (a: number[]): number {
  let aVSM: number[];
  let sum: number;
  aVSM = [];
  for (let i = 0; i < a.length; i++) {
    sum = 0;
    for (let j = 0; j < a.length; j++) {
      sum += Math.abs(a[i] - a[j]);
    }
    aVSM.push(sum);
  }
  return a[aVSM.indexOf(Math.min(...aVSM))];
}

functionSolution([2, 4, 7]);
export { };
