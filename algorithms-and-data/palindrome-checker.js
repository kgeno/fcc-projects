function palindrome(str) {
  let clean = str.split(/[^a-z0-9]/ig).join('').toLowerCase();
  if (clean == clean.split('').reverse().join('')) {
    return true;
  }
  return false;
}