module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }

  const open = [];
  const close = [];
  const check = [];

  bracketsConfig.forEach((elem) => {
    for (let i = 0; i < elem.length; i++) {
      if (i % 2 === 0) {
        open.push(elem[i]);
      } else {
        close.push(elem[i]);
      }
    }
  });

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (open.indexOf(ch) > -1) {
      if(check[check.length - 1] === ch && close[open.indexOf(ch)] === ch) {
        check.pop();
      } else {
        check.push(ch);
      }
    } else {
      const openIndex = open[close.indexOf(ch)];
      if(openIndex === check[check.length-1]) {
        check.pop();
      }
    }
  }
    return check.length === 0;
}
