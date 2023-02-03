// eslint-disable-next-line no-unused-vars
function addPower(p: number, ...numsToAdd: number[]): number {
  let answer = 0;
  for (let i = 0; i < numsToAdd.length; i++) {
    answer += numsToAdd[i] ** p;
  }
  return answer;
}

export { };
//Argument of type 'string' is not assignable to parameter of type 'number'.
// addPower('a string', 4, 5, 6);
