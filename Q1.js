// Clean the room function: 
// given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 


let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20].sort((a,b) => a-b);

let newArray = [];
let newestArray = [];

function getNumbers(arr) {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i+1]) {
        newArray.push(arr[i]);
      } else if (newArray.includes(arr[i])) {
        newArray.push(arr[i]);
        newestArray.splice(0, 0, newArray);
        newArray = [];
      }
  }
}

function compareArrays(arr2) {
  let flatArr = newestArray.flat();
  for (i = 0; i < arr2.length; i++) {
    if (!flatArr.includes(arr2[i])) {
      newestArray.push(arr2[i]);
    }
  }
}

getNumbers(array);
compareArrays(array);

let answer = newestArray.sort((a, b) => {
  const first = a.length ? a[0] : a;
  const second = b.length ? b[0] : b;
  
  return first === second ? (a.length ? -1 : 1) : first - second;
});

// **************************************************************************************************************************
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

let array = [1,2,4,591,"2",392,"3",391,2,5,10,2,"12",1,1,1,"1",20,20,"300"].sort((a,b) => a-b);
let intArray = [];
let stringArray = [];
let orgArray = [];

function organizeArray(arr) {
    for (i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        intArray.push(arr[i]);
      } else if (typeof arr[i] === 'string') {
        stringArray.push(arr[i]);
      }
  } 
}

organizeArray(array);
orgArray.splice(0, 0, intArray);
orgArray.splice(0, 0, stringArray);
console.log(orgArray);