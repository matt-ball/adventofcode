(function(i) {
  var hash = "";

  while (hash.substring(0, 6) !== "000000") {
    hash = CryptoJS.MD5("ckczppom" + i).toString(CryptoJS.enc.Hex);
    i++;
  }

  return i - 1;
}(0));