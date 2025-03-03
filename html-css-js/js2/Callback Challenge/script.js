//task 1
function customMap(numbers, callback) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(callback(numbers[i]));
  }
  return result;
}

let numbers = [1, 2, 3];
let doubled = customMap(numbers, function (num) {
  return num * 2;
});
console.log(doubled); // Should output: [2,4,6]

//task 2
function filter(result, callback) {
  let arr = [];
  for (let i = 0; i < result.length; i++) {
    if (callback(result[i])) arr.push(result[i]);
  }
  return arr;
}

let result = filter([1, 2, 3, 4, 15], function (val) {
  return val < 10;
});
console.log(result); // Should output: [1,2,3,4]

//task 3
function some(results, callback) {
  for (let i = 0; i < results.length; i++) {
    if (!callback(results[i]))
    {
      return true;
    }
  }
  return false;
}
let results = some([1, 2, 3, 4], function (val) {
  return val > 5;
});
console.log(results); // Should output: true

//task 4
  function every(resultss, callback){
    for(let i = 0; i < resultss.length; i++){
      if (!callback(resultss[i])){
        return false;
      }
    }
    return true;
  }

let resultss = every([1,2,3], function(val) { return val>0; });
console.log(resultss); // Should output: true

//task5
function reduce(arr, callback){
let acc = arr[0];
  for(let i = 1; i<arr.length; i++){
    acc = callback(acc, arr[i]);
  }
  return acc;
}
let sum = reduce([1,2,3], function(acc, num) { return acc + num; });
console.log(sum); // Should output: 6

//task 6
function includes(array, callback){
  for(let i = 0; i < array.length; i++){
    if (callback(array[i])){
      return true;
    }
  }
  return false;
}
let resul = includes([1,2,3], function(val) { return val===2; });
console.log(resul); // Should output: true