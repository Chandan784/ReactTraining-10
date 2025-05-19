// let numbers = [2, 4, 6, 7];
// let [, , , y] = numbers;
// console.log(y);

// function getLocation() {
//   return [123.0, 456.0];
// }
// let [lat, lon] = getLocation();

// console.log(lat, lon);

// function useDeatails() {
//   return ["chandan", 26, "computer science"];
// }
// let [name, age, subject] = useDeatails();

// console.log(name, age, subject);

let scores = [200, 14, 50, 60];
let total = 0;
for (let i = 0; i < scores.length; i++) {
  total = total + scores[i];
}

console.log(total);
