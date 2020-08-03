const negate = a => !a;

const both = (a, b) => a && b;

const either = (a, b) => a || b;

//come back
const none = (a, b) => !a && !b;

//come back
const one = (a, b) => {
  // your code here
};

const truthiness = a => Boolean(a);

const isEqual = (a, b) => a === b;

const isGreaterThan = (a, b) => a > b;

const isLessThanOrEqualTo = (a, b) => a <= b;

const isOdd = a => a % 2 !== 0;

const isEven = a => a % 2 === 0;

const isSquare = a => Math.sqrt(a) === Math.floor(Math.sqrt(a));

const startsWith = (char, string) => {
  // your code here
};

const containsVowels = string => {
  const newString = string.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < vowels.length; i++) {
    for (let j = 0; j < newString.length; j++) {
      if (vowels[i] === newString[j]) {
        return true;
      }
    }
  }
  return false;
};

const isLowerCase = string => {
  // your code here
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
