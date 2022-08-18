import { formatMoney } from 'accounting';

const getRatioAndLetter = (n: number): [number, string] => {
  if (n < 1e6) return [1e3, 'K'];
  if (n < 1e9) return [1e6, 'M'];
  if (n < 1e12) return [1e9, 'B'];

  return [1e12, 'T'];
};

export const numberFormatter = (n: number, digits: number): string => {
  if (n < 1e3) return n.toString();
  const multiplicator = 10 ** digits;
  const [ratio, letter] = getRatioAndLetter(n);

  const newNumber = parseFloat(((n / ratio) * multiplicator).toFixed(11));
  const roundedNumber = Math.round(newNumber) / multiplicator;

  if (roundedNumber.toString().indexOf('.') === -1) {
    return `${+roundedNumber}${letter}`;
  }

  const floatPart = roundedNumber.toString().split('.')[1];
  if (floatPart.length < digits) {
    const missingDigits = (10 ** (digits - floatPart.length))
      .toString()
      .replace('1', '');
    return `${+roundedNumber}${missingDigits}${letter}`;
  }
  return `${+roundedNumber}${letter}`;
};

export const moneyFormatter = (num: number, precision?: number): string =>
  formatMoney(num, '$', precision === undefined ? 2 : precision, ',', '.');
