### 1..What is an object in JavaScript?

```
object is the important feature in java script .  the object is use for binding  the properties and methods .and this properties and methods represent the simple entity.
```

### 3..How do you loop through the properties of an object in JavaScript?

```
const object = {
  name: "shoyab",
  mobile: 7733920986,
  address: "merta city",
};
let arr = Object.entries(object);

for (let i = 0; i <= arr.length -1 ; i++) {
  console.log(arr[i][0], arr[i][1]);
}
```

### 5.. Write a JavaScript function to convert an object into a list of [key, value] pairs

```

 let obj = {
   name: "shoyab",
   mobile: 9876543210,
   address: "merta city",
 };
 console.log(Object.entries(obj));
```

### 6.. Write a function that takes an object representing a person and returns their full name.

```
let person = {
   firstName: "shoyab",
   middleName: "khan",
   lastName: "kayamkhani",
 };
 console.log(
   person.firstName,person.middleName,person.lastName
 );
```

### 7...Create an Object with your personal details. Now print all the keys of the object in ascending order.

```
 let personalDetails = {
   name: "shoyab",
   mobile: 7733920986,
   fatherName: "xyz",
   city: "merta city",
 };
 let key = Object.keys(personalDetails);
 console.log(key.sort());
```

### 8..Create an Object with your personal details. Now filter out all the values of the object and show them in descending order.

```
 let personalDetails = {
  name: "shoyab",
   mobile: 7733920986,
   fatherName: "xyz",
   city: "merta city",
   aadharNumber :1212121212121212,
 };
 let key = Object.keys(personalDetails);
 let ans = key.sort(sorting);
 console.log(ans);
 function sorting(v1, v2) {
   return v2.length - v1.length;
 }
```
