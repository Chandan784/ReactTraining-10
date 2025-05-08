//check odd even

// function checkOddEven(num) {
//   i;
// }

// factoral 4 = 4*3*2*1

// function findFactorial(num) {
//   let factoral = 1;
//   for (let i = num; i >= 1; i--) {
//     factoral = factoral * i;
//   }
//   return factoral;
// }

// console.log(findFactorial(3));

//check prime number  11 = 1*11  10 ,9,8,7,6,5,4,3,2,1

// function isPrime(num) {
//   factorCount = 0;

//   for (let i = num; i >= 1; i--) {
//     if (num % i == 0) {
//       factorCount++;
//     }
//   }

//   if (factorCount > 2) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(isPrime(7));

// function fizzBuzz() {
//   for (let i = 1; i < 16; i++) {
//     if (i % 3 == 0) {
//       console.log("Fizz");
//     } else if (i % 5 == 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz();

// let str = "chandan"; ["c", "h", "a", "n", "d", "a", "n"]

//  reverse_string = "nad"

// reverse string

// function reverseString(str) {
//   let reverse_string = "";

//   for (let index = str.length - 1; index >= 0; index--) {
//     reverse_string = reverse_string + str[index];
//   }
//   return reverse_string;
// }

// console.log(reverseString("chandan"));

// function reverseString(str) {
//   let arrayStr = str.split("");
//   let reverseString = arrayStr.reverse();

//   let finalString = reverseString.join("");

//   return finalString;
// }

// let ans = reverseString("chandan");

// console.log(ans);

//palindrome  aka  = aka

// function isPalindrome(str) {
//   let reverseString = str.split("").reverse().join("");
//   console.log(reverseString);

//   if (str == reverseString) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPalindrome("noon"));

//pa

//find table

//target - 100  60

//coding problem
// Dsa - data structure and algorithim

// array , string , sorting , searching linear and binary search

//time and space complexity

//os
//computer network
//dbms
// let arr= [1,6,3,7]

//comunication skill

// reading
//writing
//listning

// array string loop if else object

//

//finf max in array

// let students = ["chandan", "akash", "dialal"];

// largest

// function findMax(arr) {
//   let largest = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }

//   return largest;
// }

// console.log(findMax([2, 5, 8, 4]));

//swap index of array

// function swapArrayIndex(arr, index1, index2) {
//   let temp = arr[index1];  //1

//   arr[index1] = arr[index2];

//   arr[index2] = temp;

//   return arr;
// }

// console.log(swapArrayIndex([1, 2, 3, 4], 0, 1));

//

// let arr = [1, 2, 3, 4];

// console.log(arr[2]);

// let index1 = 0;
// let index2 = 2;

// arr[index1] = arr[index2];

// console.log(arr);

//count vowels

// function countVowels(word) {
//   let count = 0;

//   for (let i = 0; i < word.length; i++) {
//     if (
//       word[i] == "a" ||
//       word[i] == "e" ||
//       word[i] == "i" ||
//       word[i] == "o" ||
//       word[i] == "u"
//     ) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countVowels("elephant"));

// let user_name = "chandan";
// console.log(user_name.includes("a" || "e" || "i"));

//Capitalize First Letter

//this is a boy

function captilizeFirstLetter(sentence) {
  let splitWordArray = sentence.split(" ");
  console.log(splitWordArray);

  let newStentence = ""; //This Is A Boy

  splitWordArray.forEach((word) => {
    let newWord = word[0].toUpperCase(); //T, I, B
    for (let i = 1; i < word.length; i++) {
      newWord = newWord + word[i];
    }
    newStentence = newStentence + newWord + " ";
  });

  return newStentence;
}

captilizeFirstLetter("this is a boy");
