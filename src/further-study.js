// EXTRA CREDIT

// Return the strings common to both input arrays. Do not return duplicates.
// Ex.:
//   commonStrings(['a', 'b', 'c'], ['a', 'd', 'e']);
//   => ['a']
//   commonStrings(['zoo', 'space', 'zoo'], ['zoo', 'space', 'boat']);
//   => ['zoo', 'space']
function commonStrings(array1, array2) {
  const commonArray = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i]) && !commonArray.includes(array1[i])) {
      commonArray.push(array1[i]);
    }
  }
  return commonArray;
}

// console.log(commonStrings(['a', 'b', 'c'], ['a', 'd', 'e']));
// console.log(commonStrings(['zoo', 'space', 'zoo'], ['zoo', 'space', 'boat']));

// Given three numbers, return a list of numbers from 1 to 100 that are
// divisible by at least one of a, b or c.
// Ex.:
//   divisibleByEither(50, 30, 29);
//   => [29, 30, 50, 58, 60, 87, 90, 100]
function divisibleByEither(a, b, c) {
  const divisibleArr = [];
  for (let i = 1; i < 101; i++) {
    if (i % a === 0 || i % b === 0 || i % c === 0) {
      divisibleArr.push(i);
    }
  }
  return divisibleArr;
}

// console.log(divisibleByEither(50, 30, 29));

// Compress a string using the rules below and return the result. To compress a
// string, replace consecutive duplicate characters with a number and the
// character. For this compression, only count consecutive duplicate
// characters. If a character is not repeated, it should not be changed.
// Assume that all inputs are lowercased.
// Ex.:
//   compressString('aaa');
//   => '3a'
//   compressString('ssssbb');
//   => '4s2b'
//   compressString('ssssbbba');
//   => '4s3ba'
function compressString(string) {
  let newStr = ``;
  let count = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      // Increase count if letters are repeating
      count += 1;
    } else if (string[i] !== string[i + 1] && count <= 1) {
      // If no repeating letters, add current letter to newStr
      newStr += string[i];
    } else if (string[i] !== string[i + 1] && count > 1) {
      // Once repetion of letters stops, add the number of repeating letters followed by the repeating letter to newStr (and restart count)
      newStr += count;
      newStr += string[i];
      count = 1; 
    }
  }
  return newStr;
}

// console.log(compressString('aaa'));
// console.log(compressString('ssssbb'));
// console.log(compressString('ssssbbba'));

export { commonStrings, compressString, divisibleByEither };
