//Q1                 // Math.floor rounds down the number so decimals dont add a full number
// function showRatings(rating){
//     let ratings = "";
//     for (let i = 0; i < Math.floor(rating); i++){ // or let i = 1 and i <= rating, so then you can get rid of -1 on line six
//         ratings = ratings + "*";
//         if (i !== Math.floor(ratings) - 1){ // <-- says if not last rating "*" give it a space
//             ratings = ratings + " "
//         }
//     }
//     if (!Number.isInteger(rating)){ // original (rating = .5)
//         ratings = ratings + "."
//     }
//     return ratings;
// }

//^ original. Below is cleaned up with plus equals
// function showRatings(rating) {
//   let ratings = "";
//   for (let i = 0; i < Math.floor(rating); i++) {
//     // or let i = 1 and i <= rating, so then you can get rid of -1 on line six
//     ratings += "*";
//     if (i !== Math.floor(ratings) - 1) {
//       // <-- says if not last rating "*" give it a space
//       ratings += " ";
//     }
//   }
//   if (!Number.isInteger(rating)) {
//     // original (rating = .5)
//     ratings += ".";
//   }
//   return ratings;
// }

// Doing Q1 again,

// function showRatings(rating) {
//   let ratings = "";
//   for (let i = 0; i < Math.floor(rating); i++) {
//     ratings += "*";
//     if (i !== Math.floor(ratings) - 1) {
//       ratings += " ";
//     }
//   }
//   if (!Number.isInteger(rating)) {
//     ratings += ".";
//   }
//   return ratings;
// }

// console.log(showRatings(4.5));
//Doing Q1 again 2x

// function showRatings (rating){
//   let ratings = ""
//   for (let i = 0; i < Math.floor(rating); i++){
//     ratings += "*";
//     if (i !== Math.floor(ratings) - 1){
//       ratings += " ";
//     }
//   }
//   if (!Number.isInteger(rating)){
//     ratings += '.'
//   }
//   return ratings
// }
// console.log(showRatings(4.5))

//Doing Q1 again III
// function showRatings(rating){
//   let ratings = "";
//   for(let i = 0; i < Math.floor(rating);i++){
//     ratings += '*'
//     if (i !== Math.floor(ratings) - 1){ // this gives it the space. Its essentially saying if "i" is not the last index put a space inbetween it.
//       ratings += " "
//     }
//   }
//   if (!Number.isInteger(rating)){
//     ratings += "."
//   }
//   return ratings
// }
// console.log(showRatings(4.5))
//Doing Q1 again IV
function showRatings(rating) {
  let ratings = "";
  for (let i = 0; i < Math.floor(rating); i++) {
    ratings += "*";
    if (i !== Math.floor(ratings) - 1) {
      ratings += " ";
    }
  }
  if (!Number.isInteger(rating)) {
    ratings += ".";
  }
  return ratings;
}
// console.log(showRatings(20.3)) // if you get undefined back from a function its because you haven't returned anything

//Q2
function sortLowToHigh(arr) {
  //sort looks at the unicode aka first index of a number
  return arr.sort(function (a, b) {
    return a - b;
  });
}
// console.log(sortLowToHigh([5,10,0,-5]))
//Daves solution
function sortLowToHigh(number) {
  // ES6
  return number.sort((a, b) => a - b);
}
//
//Q3
function sortHighToLow(obj) {
  return obj.sort((a, b) => b.price - a.price); // dot notation for ordering by property
}

// console.log(
//   sortHighToLow([
//     { id: 1, price: 50 },
//     { id: 2, price: 0 },
//     { id: 3, price: 500 },
//   ])
// );

//Q4
async function postsByUser(userId) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // backend code not readable
  const result = await response.json(); // json converts it to a readable format
  const posts = result.filter((element) => element.userId === userId); // this is saying to return only user objects with the userid of, the number we pass through in the parameters, 4
  console.log(posts);
}
postsByUser(4);
