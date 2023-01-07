function solution(yL, yR, fL, fR) {
  const your = yL + yR;
  const friend = fL + fR;
  if (your !== friend) {
    return false;
  } else if (yL === fL || yR === fL || yL === fR || yR === fR) {
    return true;
  } else {
    return false;
  }
}

const yourLeft = 10;
const yourRight = 15;
const friendsLeft = 5;
const friendsRight = 20;

solution(yourLeft, yourRight, friendsLeft, friendsRight);
