function solution(inputString) {
  var palindrome = '';
  for (var i = inputString.length - 1; i >= 0; i--) {
    palindrome += inputString[i];
  } if (palindrome === inputString) {
    return true;
  } else {
    return false;
  }
}

solution('aabaa');
