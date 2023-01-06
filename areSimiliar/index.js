function solution(a, b) {
  if (a.toString() === b.toString()) {
    return true;
  }
  let array1 = [];
  let array2 = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      array1.push(a[i]);
      array2.push(b[i]);
    }
  }
  array2 = array2.reverse().toString();
  array1 = array1.toString();
  if (array1 === array2) {
    return true;
  } else {
    return false;
  }
}

const c = [832, 998, 148, 570, 533, 561, 894, 147, 455, 279];
const d = [832, 570, 148, 998, 533, 561, 455, 147, 894, 279];
solution(c, d);
