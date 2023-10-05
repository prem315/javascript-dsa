function countDigits(num) {
  let count = 0;
  while (num > 0) {
    count = count + 1;
    num = Math.floor(num / 10);
  }

  return count;
}

// check palindrome
function checkPalindrome(num) {
  let number = num;
  let reverse = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    num = Math.floor(num / 10);
    reverse = 10 * reverse + lastDigit;
  }
  if (number === reverse) {
    return "palindrome";
  } else {
    return "not palindrome";
  }
}

export { countDigits, checkPalindrome };
