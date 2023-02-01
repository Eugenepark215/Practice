function solution(name) {
  for (let i = 0; i < name.length; i++) {
    if (Number.isInteger(parseInt(name[0])) || name.includes('-') || name[0] === ' ' || name.includes('[') || name.includes(' ')) {
      return false;
    }
  }
  return true;
}

solution('123');
