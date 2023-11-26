const axios = require("axios");

// let res = axios.get("https://www.boredapi.com/api/activity");
// console.log(`You could ${res.data.activity}`);

// axios
//   .get("https://www.boredapi.com/api/activity")
//   .get("https://httpstat.us/404")
//   .then((res) => {
//     console.log(`You could ${res.data.activity}`);
//   })
//   .catch((error) => {
//     console.error(`ERROR ${error}`);
//   });

// console.log("Why i am here");

// async function getActivity() {
//   try {
//     let res = await axios.get(
//       "https://www.boredapi.com/api/activity?minprice=0&maxprice=0.1"
//     );
//     // let res = await axios.get("https://httpstat.us/500");
//     console.log(`You could ${res.data.activity}`);
//   } catch (e) {
//     console.error(`ERROR ${e}`);
//   }
// }

// getActivity();

// function sendRequest() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       //   resolve("Michael Chua");
//       reject("Server rejected");
//     }, 2000);
//   });
// }

// async function getUsername() {
//   try {
//     let username = await fetch("https://jsonplaceholder.typicode.com/users");
//     username = await username.json();
//     console.log(`Username: ${username}`);
//   } catch (error) {
//     console.error(`ERROR ${error}`);
//   }
// }

// getUsername();

const fruits = ["Banana", "Grapes", "Mango"];

fruits.map((f) => {
  console.log(f);
});

const newA = fruits.filter((f) => f.length > 5);
console.log(newA);

const numbers = [2, 4, 6, 8, 10];

const [two, four, six, eight, ten] = numbers;

const result = numbers.reduce((sum, num) => (sum += num), 0);
console.log(result);

const peoples = [
  {
    name: "John",
    age: 21,
  },
  {
    name: "Mic",
    age: 33,
  },
];
console.log(peoples);
const Obj = [...peoples, { name: "Belle", age: 30 }];
console.log(Obj);

const a = 10;

a > 10
  ? console.log("Greater than 10")
  : a == 10
  ? console.log("Equal to 10")
  : console.log("Smaller than 10");

// Promise + Async await, .Then and .catch
// const data = axios
//   .get("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("After code");

async function getPost() {
  try {
    const data = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1000"
    );
    console.log(data.data);
  } catch (err) {
    console.log(err);
  }
}
getPost();
console.log("Wait async code");
