### callback

```
A callback is a function that is passed as an argument to another function and gets executed later when a specific event or condition occurs.Callbacks are commonly used in programming to handle asynchronous operations and their results.

```

### example

```
function fetchData(callback) {
  // Simulating an asynchronous operation
  setTimeout(function() {
    const data = 'Some data';
    callback(data);
  }, 1000);
}

function handleData(data) {
  console.log('Received data:', data);
}

fetchData(handleData); // Pass the handleData function as a callback

```

### Ajax

```jax is a technique that allows web browsers to send and receive data from a server without refreshing the entire web page.
It enables building dynamic and interactive web applications by making asynchronous requests to the server.
Ajax typically uses the XMLHttpRequest object to send and receive dat
```

### example

```const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);

xhr.onload = function() {
  if (xhr.status === 200) {
    const response = xhr.responseText;
    console.log('Received data:', response);
  }
};

xhr.send();

```

### API (Application Programming Interface):

```
An API is a set of rules and protocols that allows different software applications to communicate with each other.
It defines how different components of software systems should interact.
APIs are commonly used to retrieve data, send data, or perform specific actions on a remote server.
```

### How the web works:

```
The web follows a client-server architecture, where the client (usually a web browser) sends requests to a server and receives responses.
The client sends a request for a resource (such as a web page) to the server using HTTP (Hypertext Transfer Protocol).
The server processes the request and generates a response, which is sent back to the client.
The client then displays the received response, which may include HTML, CSS, JavaScript, and other assets.
Users interact with the client-side interface, and further actions can trigger new requests to the server.
```

### Promise and Fetch API

```
Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and allow handling the result asynchronously.
The Fetch API provides an interface for making network requests and returns a Promise that resolves to the response of the request.
```

### example

```
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log('Received data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```

### Consuming Promises using .then:

```
Promises can be consumed using the .then method, which takes a callback function to handle the resolved value of the Promise
```

### example

```
myPromise
  .then(result => {
    console.log('Resolved:', result);
  })
  .catch(error => {
    console.error('Rejected:', error);
  });

```

### Chaining Promises using .then and .catch:

```
Promises can be chained together using multiple .then calls to perform sequential asynchronous operations.
The .catch method can be used at the end of the chain to handle errors that occur in any of the previous promises




```

### Handling Rejected Promises with .catch:

```
The .catch method is used to handle rejected promises, which occur when an error occurs during the asynchronous operation.
It takes a callback function that handles the error and allows you to perform error handling or fallback actions.
```

### example

```
myPromise
  .then(result => {
    console.log('Resolved:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```

### Creating a Simple Promise using new Promise:

```Promises can be created using the new Promise constructor, which takes a callback function with resolve and reject parameters.
Inside the callback function, you perform the asynchronous operation and call the resolve function with the result or the reject function with an error.
```

### example

```
const myPromise = new Promise((resolve, reject) => {
  // Perform an asynchronous operation
  setTimeout(function() {
    const data = 'Some data';
    resolve(data); // Resolve the promise with the data
  }, 1000);
});

```

### Consuming Promises using Async/Await:

```
Async/await is a modern JavaScript syntax that provides a more readable and synchronous-like way to work with promises.
The async keyword is used to define an asynchronous function, and the await keyword is used to pause the execution and wait for the promise to resolve.
```

### example

```
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log('Received data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();

```

### Error Handling with Try/Catch/Finally:

```
Error handling can be done using the try, catch, and finally blocks.
The try block contains the code that may throw an error.
The catch block catches the error and handles it.
The finally block contains code that is always executed, whether an error occurs or not.
```

### example

```
try {
  // Code that may throw an error
  const result = someFunction();
  console.log('Result:', result);
} catch (error) {
  console.error('Error:', error);
} finally {
  console.log('Cleanup code');
}

```
