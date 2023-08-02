function addCommas(num) {
  const str = num.toString();
  const strLength = str.length;
  let newStr = [];
  let commasPlace = strLength % 3;
  for (let i = 0; i < strLength; i++) {
    if (i === commasPlace && commasPlace !== 0) {
      newStr.push(",");
      newStr.push(str[i]);
      commasPlace += 3;
    } else {
      newStr.push(str[i]);
    }
  }
  return newStr.join("");
}

console.log(addCommas(1234));
console.log(addCommas(1000000));
console.log(addCommas(9876543210));
console.log(addCommas(6));
console.log(addCommas(-10));
console.log(addCommas(-5678));

// module.exports = addCommas;
