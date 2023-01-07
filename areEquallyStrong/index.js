function solution(yL, yR, fL, fR) {
  const your = yL + yR;
  const friend = fL + fR;
  if (your === friend) {
    return true;
  } else {
    return false;
  }
}

const yourLeft = 10;
const yourRight = 15;
const friendsLeft = 15;
const friendsRight = 10;

solution(yourLeft, yourRight, friendsLeft, friendsRight);
