export default function formatNumber(number) {
  const rusNumbers = /(\+7|8)+\s?\(?(\d{3})\)?\D?(\d{3})\D?(\d{2})\D?(\d{2})/;
  const foreignNumbers = /\d/g;
  let resultNumber;
  if (number.match(rusNumbers) !== null) {
    resultNumber = '+7';
    const numberList = number.match(rusNumbers);
    for (let i = 2; i < 6; i += 1) {
      resultNumber += numberList[i];
    }
  } else {
    resultNumber = `+${number.match(foreignNumbers).reduce((a, b) => String(a) + b)}`;
  }
  return resultNumber;
}
