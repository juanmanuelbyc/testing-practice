stringLength = (str) => {
  if (0<str.length && str.length<10) return str.length;
  return ('invalid string length');
  }
module.exports = stringLength;