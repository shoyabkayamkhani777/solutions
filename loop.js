///-------for loop --------///
// 1..Print 1 to 100
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

//2.. Print all Odd numbers from 1 to 100

for (let j = 1; j <= 100; j++) {
  if (j % 2 !== 0) {
    console.log(j);
  }
}

//3..Print all Even numbers from 1 to 100
for (let j = 1; j <= 100; j++) {
  if (j % 2 === 0) {
    console.log(j);
  }
}
// 4..Print all numbers which are divisible of 5 in 1 to 100
for (let j = 1; j <= 100; j++) {
  if (j % 5 === 0) {
    console.log(j);
  }
}
//5.. Print all numbers which are divisible of 5 and 15 in 1 to 100
for (let j = 1; j <= 100; j++) {
  if (j % 5 === 0 && j % 15 === 0) {
    console.log(j);
  }
}

// 6..Print 2's table
let kk = 2;
for (let k = 0; k <= 10; k++) {
  console.log(k * kk);
}

//7..Ask user a question "How many times do you want to print Hello World?" and then print Hello World that number of times

let number = Number(prompt("how many times do you want to print hello world"));
for (let l = 1; l <= number; l++) {
  console.log("hello world");
}

//8..Calculate sum of all numbers from 1 to 100
let sum = 0;
for (let m = 1; m <= 100; m++) {
  sum = sum + m;
}
console.log(sum);

//9..Calculate sum of all odd numbers from 1 to 100
let summ = 0;
for (let n = 1; n <= 100; n++) {
  if (n % 2 !== 0) {
    summ += n;
  }
}
console.log("The sum of all odd numbers:", summ);

//10..Calculate sum of all even numbers from 1 to 100
let total = 0;
for (let p = 1; p <= 100; p++) {
  if (p % 2 === 0) {
    total += p;
  }
}
console.log("The sum of all odd numbers:", sum);

//11..print 1,2,4,8,16,32,64.......upto 2048
for (let x = 1; x <= 2048; x = x * 2) {
  console.log(x);
}

/* 12.. print

1,2,3,4,5,6,7,8,9,10
11,12,13,14,15,16,17,18,19,20
.
.
......................99,100*/
for (q = 1; q <= 100; q = q + 1) {
  document.write(q);
  if (q % 10 === 0) {
    document.write("<br>");
  }
}

//13..print 1 to 100, but with a specific condition. If a number is divisible by both 3 and 5, it logs "fizzbuzz" to the console instead of the number itself.

for (y = 1; y <= 100; y++) {
  if (y % 3 === 0 && y % 5 === 0) {
    console.log("fizzbuzz");
  } else {
    console.log(y);
  }
}
/*14...print 2 table like this
2*1=2
2*2=4
2*3=6
2*4=8
2*5=10
.
.
.
2*10=20
 */

let x = 2;
for (x = 1; x <= 10; x = x + 1) {
  console.log(x + "*" + x + "=" + x * x);
}
/*15..Run a loop from 1 to 50
  
From 1 to 10 print "A"
From 11 to 20 print "B"
From 21 to 30 print "C"
From 31 to 40 print "D"
From 41 to 50 print "E" */
for (let z = 1; z <= 50; z++) {
  if (z <= 10) {
    console.log(z + "A");
  } else if (z <= 20) {
    console.log(z + "B");
  } else if (z <= 30) {
    console.log(z + "C");
  } else if (z <= 40) {
    console.log(z + "D");
  } else if (z <= 50) {
    console.log(z + "E");
  }
}

/*16..Run a loop from 50 to 1
From 50 to 41 print "A"
From 40 to 31 print "B"
From 30 to 21 print "C"
From 20 to 11 print "D"
From 10 to 1 print "E" */

for (let r = 50; r >= 1; r--) {
  if (r <= 10) {
    console.log(r + " E");
  } else if (r <= 20) {
    console.log(r + " D");
  } else if (r <= 30) {
    console.log(r + " C");
  } else if (r <= 40) {
    console.log(r + " B");
  } else if (r <= 50) {
    console.log(r + " A");
  }
}

/**17..Print below series
5 25 125.. till number is less than equal to 10000
*/

for (let s = 1; s <= 10000; s = s *= 5) {
  console.log(s);
}

/*18..Print below series 3,6,9,12... till number is less than equal to 500
 */
for (let t = 3; t <= 500; t = t + 3) {
  console.log(t);
}

/** 19...print below series
120
221
322
423
524
625
726
827
928
1029 */
for (let u = 120; u <= 1029; u = u + 101) {
  console.log(u);
}

//20...print below series 100 95 90 85 80 ... till 0
for (let v = 100; v >= 0; v -= 5) {
  console.log(v);
}

// 21..Number 70 is divisible by which numbers till 70? Find out and print those numbers

for (let w = 1; w <= 70; w++) {
  if (70 % w === 0) {
    console.log(w);
  }
}
//-----------------------------------------------------//

//---------while loop--------------//

//1....Write a while loop that logs the numbers 1 to 10 in the console.

let a = 1;
while (a <= 10) {
  console.log(a);
  a++;
}
//2..Calculate sum of all numbers from 1 to 10
let sumofnumber = 0;
let b = 1;
while (b <= 10) {
  sumofnumber += b;
  b++;
}
console.log(sumofnumber);

//3..Counting down from 10 to 1

let c = 10;
while (c >= 1) {
  console.log(c);
  c--;
}
//4..Print 2's table

let table = 2;
let d = 1;
while (d <= 10) {
  console.log(d * table);
  d++;
}
//5..Calculate sum of all odd numbers from 1 to 100
let e = 1;
while (e <= 100) {
  if (e % 2 !== 0) {
    console.log(e);
  }
  e++;
}
//------------------------------------------------//

//----do while loop -----///

//1..Write a do...while loop that logs the numbers 1 to 5 in the console

let f = 1;
do {
  console.log(f);
  f++;
} while (f <= 5);
//2..Counting down from 10 to 1
let g = 10;
do {
  console.log(g);
  g--;
} while (g >= 1);

//3..Calculate sum of all numbers from 1 to 10
let sumof10 = 0;
let h = 1;
do {
  sumof10 = sumof10 + h;
  h++;
} while (h <= 10);

console.log(sumof10);

//4..Print 2's table
let table2 = 2;
let ii = 1;
do {
  console.log(ii * table2);
  ii++;
} while (ii <= 10);
//5..Ask user a question "How many times do you want to print Hello World?" and then print Hello World that number of times
let count = Number(prompt("How many times do you want to print Hello World"));
let i = 1;
do {
  console.log("hello World" + i);
  i++;
} while (i <= count);

//6..Calculate sum of all even numbers from 1 to 100
let allnumber = 1;
let sumofeven = 0;
do {
  if (allnumber % 2 === 0) {
    sumofeven = sumofeven + allnumber;
  }
  allnumber++;
} while (allnumber <= 100);
console.log(sumofeven);

//------------------happy ending --------------------/
