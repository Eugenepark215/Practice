function solution(s1, s2) {
  const common = [];
  let test1 = s1;
  let test2 = s2;
  for (let i = 0; i < s1.length; i++) {
    if (test2.includes(s1[i])) {
      common.push(s1[i]);
      test1 = test1.replace(s1[i], '');
      test2 = test2.replace(s1[i], '');
    }
  } return common.length;
}
const test1 = 'aabcc';
const test2 = 'adcaa';
solution(test1, test2);
