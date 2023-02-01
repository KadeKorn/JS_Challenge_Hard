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
function showRatings(rating){
  let ratings = "";
  for(let i = 0; i < Math.floor(rating);i++){
    ratings += '*'
    if (i !== Math.floor(ratings) - 1){
      ratings += " "
    }
  }
  if (!Number.isInteger(rating)){
    ratings += "."
  }
  return ratings
}
console.log(showRatings(4.5))