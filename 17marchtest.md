### 1..Create an array called fruits that contains the following elements: "apple", "banana", "orange". Now check if "orange" is in the fruits array.

```
let array = ["apple", "banana", "orange"];
console.log(array.includes("orange"));

```

### 2...Given an array of numbers, write a function that returns the sum of all the even numbers in the array.

```
let arr = [2, 3, 4, 5, 6, 7, 8, 9, 22];
function sumOfEvenNumber(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}
console.log(sumOfEvenNumber(arr));

```

### 4...Given an array of strings, write a function that returns the longest string in the array.

```
let arr1 = ["apple", "banana", "kiwi", "orange", "pear"];
function test(arr) {
  let longest = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) longest = arr[i];
  }
  return longest;
}
console.log(test(arr1));
```

### 5...Write a function that takes an array of numbers and returns the largest number in the array.

```
let arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// function test(arr) {
//   let longest = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > longest.length) longest = arr[i];
//   }
//   return Math.max(...arr);
// }
// console.log(test(arr1))
```

### 6...Write a function that takes an array of numbers and returns a new array that only contains the even numbers from the original array.

```
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    newArray.push(arr[i]);
  }
}
console.log(newArray);
```

### 11...Write a function that takes an array of numbers and returns a new array that only contains numbers that are greater than 5. Use filter function

```
let moreThan5 = [1,2,34,5,6,7,89,0]
ans = moreThan5.filter(test)
function test(num){
   return num > 5
}
console.log(ans);

```
