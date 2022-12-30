function solution(n) {
  const half = n.length / 2;
  let firstHalf = 0;
  let secondHalf = 0;
  for (let i = 0; i < half; i++) {
    firstHalf += n[i];
  }
  for (let j = n.length - 1; j >= half; j--) {
    secondHalf += n[j];
  }
  if (firstHalf === secondHalf) {
    return true;
  }
}

const input = 1230;
solution(input);
