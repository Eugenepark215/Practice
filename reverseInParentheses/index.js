function solution(inputString) {
  let x = inputString;
  while (x.includes('(')) {
    const end = x.indexOf(')');
    const start = x.lastIndexOf('(', end);
    const reverse = x.slice(start + 1, end).split('').reverse().join('');
    x = x.slice(0, start) + reverse + x.slice(end + 1);
  }
  return x;
}
const test = 'foo(bar(baz))blim';
solution(test);
