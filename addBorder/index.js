function solution(picture) {
  let frame = '';
  let word = '';
  const pictureFrame = [];
  for (let i = 0; i < picture.length; i++) {
    word = '*' + picture[i] + '*';
    pictureFrame.push(word);
  }
  for (let i = 0; i < word.length; i++) {
    frame += '*';
  }
  pictureFrame.unshift(frame);
  pictureFrame.push(frame);
  return pictureFrame;
}

const pic = ['abc', 'ded'];
solution(pic);
