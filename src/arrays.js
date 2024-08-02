// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
function greaterThanTen(numbers) {
  const greaterThanTen = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
      greaterThanTen.push(numbers[i]);
    }
  }
  return greaterThanTen;
}

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
function bWords(words) {
  const startsWithB = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i][0] === `b` || words[i][0] === `B`) {
      startsWithB.push(words[i]);
    }
  }
  return startsWithB;
}

// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
function extend(originalArray, additionalItems) {
  const newArray = originalArray;
  for (let i = 0; i < additionalItems.length; i++) {
    newArray.push(additionalItems[i]);
  }
  return newArray;
}

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
function itemsWithLength(items, length) {
  const newArray = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].length === length) {
      newArray.push(items[i]);
    }
  }
  return newArray;
}

// console.log(itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3));
// console.log(itemsWithLength(['a', 'b', 'c', 'd', 'e'], 1));


// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
function everyOtherItem(items) {
  const newArray = [];
  for (let i = 0; i < items.length; i+=2) {
    newArray.push(items[i]);
  }
  return newArray;
}

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {
  const indices = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i][0] === letter) {
      indices.push(i);
    }
  }
  return indices;
}

// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {
  const smallestArr = [];

  // Sort items array
  // Compare items[i] to the subsequent items. If another item is less than items[i], swap items.
  for (let i = 0; i < items.length - 1; i++) {
    let indexOfSmallest = i;
    for (let j = i + 1; j < items.length; j++) {
      if (items[j] < items[indexOfSmallest]) {
        indexOfSmallest = j;
      }
    }
    if(items[indexOfSmallest] < items[i]) {
      const temp = items[i];
      items[i] = items[indexOfSmallest];
      items[indexOfSmallest] = temp;
    }
  }
  
  // Get n number of items from sorted items array starting with items[n - 1] and ending with items[0]
  for (let i = n - 1; i >= 0; i--) {
    smallestArr.push(items[i]);
  }
  
  return smallestArr;
}

// smallestNItems([1, 30, 4, 21, 100000], 3);

// I feel like I totally over complicated this.
// Was there something we learned in lecture/lab that would have made this easier or less complicated?



// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value) {
  if (items.indexOf(value) !== -1) {
    return items.indexOf(value);
  }
}

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {}

export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
