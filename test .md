### 1..

```

```

### 2...Write a JavaScript program to capitalize the first letter of each word of a given string.

```Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox'
```

### answer2

```
function firstwordupper(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    let firstLetter = words[i].charAt(0).toUpperCase();

    let allLetter = words[i].slice(1);

    let capitalizedWord = firstLetter + allLetter;

    words[i] = capitalizedWord;
  }

  let capitalizedString = words.join(" ");

  return capitalizedString;
}
let inputString = "the quick brown fox";
let outputString = firstwordupper(inputString);
console.log(outputString);




```

### 3...Write a JavaScript program to check whether all the digits in a given number are the same or not.

### answer3

```
function allDigitsSame(num) {
  let numString = num.toString();
  for (let i = 1; i < numString.length; i++) {
    if (numString[i] !== numString[0]) {
      return false;
    }
  }
  return true;
}
let inputNum = 77777;
let result = allDigitsSame(inputNum);
console.log(result);
```

### 4...Write a JavaScript function that reverse a number.

### answer4

```
function reverseNumber(num) {
  let digits = num.toString().split("");
  let reversedDigits = digits.reverse();
  let reversedNum = Number(reversedDigits.join(""));
  return reversedNum;
}
let inputNum = 12345;
let reversedNum = reverseNumber(inputNum);
console.log(reversedNum);

```

### 5...Write a JavaScript function to extract unique characters from a string.

```
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"
```

### answer5

```
function extractUniqueChars(str) {
  let uniqueChars = {};
  for (let i = 0; i < str.length; i++) {
    if (!uniqueChars[str[i]]) {
      uniqueChars[str[i]] = true;
    }
  }
  return Object.keys(uniqueChars).join("");
}
let inputStr = "thequickbrownfoxjumpsoverthelazydog";
let uniqueChars = extractUniqueChars(inputStr);
console.log(uniqueChars);

```

### 6...Write a JavaScript function to chop a string into chunks of a given length. Test Data :

```console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));
[]'w','3', 'r', 'e', 's', 'o', 'u', 'r', 'c', 'e']
["w3", "re", "so", "ur", "ce"]
["w3r", "eso", "urc", "e"]
```

### answer6

```
function stringChop(str, len) {
  let x = [];

  for (let i = 0; i < str.length; i += len) {
    x.push(str.substr(i, len));
  }

  return x;
}
console.log(stringChop('w3resource',1));
console.log(stringChop('w3resource',2));
console.log(stringChop('w3resource',3));

```

### 7...Write a JavaScript function to find a word within a string. Test Data :

```
console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
Output :
"'fox' was found 1 times."
"'aa' was found 2 times."
```

### answer 7

```
function searchWord(str, word) {
  let words = str.split(' ');
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word) {
      count++;
    }
  }
  return word + " was found " + count + " times.";
}
console.log(searchWord("The quick brown  fox fox", "fox"));
console.log(searchWord('aa, bb, cc, dd, aa', 'aa'));

```

### 9.. Convert below array

```
[[1,2], [3,4], [5,6], [7,8], [9,10]]
to
[3,7,11,15,19]
```

### answer 9

```
let myArray = [[1,2], [3,4], [5,6], [7,8], [9,10]];
let newArray = [];

for (let i = 0; i < myArray.length; i++) {
  let sum = myArray[i][0] + myArray[i][1];
  newArray.push(sum);
}

console.log(newArray);


```

### 10...Print below pattern

```
1 2 3 4 5
 2 3 4 5
  3 4 5
   4 5
    5
```

### answer 10

```
for (let i = 1; i <= 5; i++) {
  let x = '';
  for (let j = i; j <= 5; j++) {
    x += j + ' ';
  }
  for (let k = 1; k < i; k++) {
    x = ' ' + x;
  }
  console.log(x);
}

```

### 8..Create an array of numbers. Now filter out all the numbers from the array where number is in between 30-50. After filtering the numbers, add 20 to each number and finally print the sum of all numbers using reduce function.

### answer 8

```
let numbers = [10, 20, 30, 40, 50, 60, 70];
let x = [];
for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i]
  if (number <= 30 && number >= 50) {
    x.push(number + 20);
  }
}
console.log(x);

```
