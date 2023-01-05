function solution(a, b) {
  a.sort(function (a, b) {
    return a - b;
  });
  b.sort(function (a, b) {
    return a - b;
  });
  if (a.toString() === b.toString()) {
    return true;
  } else {
    return false;
  }
}

const c = [832, 998, 148, 570, 533, 561, 894, 147, 455, 279];
const d = [832, 570, 148, 998, 533, 561, 455, 147, 894, 279];
solution(c, d);
