function rot13(str) { // LBH QVQ VG!
  let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let arr = str.split(/[^A-Z!.?]/g);

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].split('');
    for (let j = 0; j < word.length; j++) {
      let count = alphabet.indexOf(word[j]) + 13;
      if (count > 25) {
       count = count - 26;
      }
      if (/\w/.test(word[j])) {
        word.splice(j, 1, alphabet[count]);
      }
    }
    arr[i] = word.join('');
  }
  str = arr.join(' ');
  return str;
}