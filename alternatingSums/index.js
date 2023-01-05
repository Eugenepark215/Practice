function solution(a) {
  let team1 = 0;
  let team2 = 0;
  const total = [];
  for (let i = 0; i < a.length; i++) {
    if (i === 0 || i % 2 === 0) {
      team1 += a[i];
    } else if (i % 2 !== 0) {
      team2 += a[i];
    }
  }
  total.push(team1);
  total.push(team2);
  return total;
}
const pep = [50, 60, 60, 45, 70];
solution(pep);
