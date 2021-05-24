function checkSpam(str) {
  if (str === '1XbeT now' || str === 'free xxxxx') {
    return true;
  }
  return false;
}

alert ( checkSpam('1XbeT now') );
alert ( checkSpam('free xxxxx') );
alert ( checkSpam('innocent rabbit') );