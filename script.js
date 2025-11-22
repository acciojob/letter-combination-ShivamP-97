function letterCombinations(input_digit) {
  if (!input_digit || input_digit.length === 0) return [];

  const map = {
    "0": "0",
    "1": "1",
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  };

  const result = [];

  function backtrack(index, path) {
    if (index === input_digit.length) {
      result.push(path);
      return;
    }

    const letters = map[input_digit[index]];
    for (const letter of letters) {
      backtrack(index + 1, path + letter);
    }
  }

  backtrack(0, "");

  return result.sort();
}

module.exports = letterCombinations;
