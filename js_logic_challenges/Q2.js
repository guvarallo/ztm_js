// Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, give the target number. 
// For example: answer([1,2,3], 4)should return [1,3]
 

function addNumbers (array, target) {
  let answer = [];
  let pair = [];
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (target === array[i] + array[j] && i !== j) {
        pair.push(array[i], array[j]);
        answer.splice(0, 0, pair);
        pair = [];
      }
    }
  }
  return answer.reverse();
}

// Solution with forEach();

function addNumbers (array, target) {
  let answer = [];
  let pair = [];
  array.forEach(i => {
    array.forEach(j => {
      if (target === array[i] + array[j] && i !== j) {
        pair.push(array[i], array[j]);
        answer.splice(0, 0, pair);
        pair = [];
      }
    });
  });
  return answer.reverse();
}

