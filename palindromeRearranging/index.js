function solution(inputString) {
  const array = inputString.split('');
  const object = {};
  let not = 0;
  for (let i = 0; i < array.length; i++) {
    if (!object[array[i]]) {
      object[array[i]] = 1;
    } else if (object[array[i]]) {
      object[array[i]] += 1;
    }
  }
  const array3 = Object.values(object);
  for (let i = 0; i < array3.length; i++) {
    if (array3[i] % 2 !== 0) {
      not += 1;
      if (not > 1) {
        return false;
      }
    }
  } return true;
}
solution('absaba');
