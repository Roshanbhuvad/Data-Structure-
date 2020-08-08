function aclean(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }
  return Object.values(obj);
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr));


// 2nd example
const words = ["map", "pam","art","how", "rat","tar","who","shoop"];

//helper function

// function alphabetize(word) {
//     if(!word) {
//         return;
//     }
//     word = word.split('');
//     word = word.sort("")
// }