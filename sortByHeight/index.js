function solution(a) {
  const people = [];
  const ascending = [];
  const treeIndex = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      people.push(a[i]);
    } else {
      treeIndex.push(i);
    }
  }
  people.sort(function (a, b) {
    return a - b;
  });
  for (let j = 0; j < a.length; j++) {
    if (a[j] !== -1) {
      ascending.push(people.shift());
    } else {
      ascending.push(-1);
    }
  }
  return ascending;
}

solution([-1, 150, 190, 170, -1, -1, 160, 180]);
