function solution(name) {
  return /^[a-z_]\w*$/i.test(name);
}

solution('123');
