
const firstArray = [ 2, 5, 8, 3, 9 ];
const secondArray = [ 12, 20, 15, 18, 14 ];

// Merging firstArray and secondArray using Spread Operator
const mergedArray = [ ...firstArray, ...secondArray ];
// mergedArray.forEach(numb => {
//     console.log(numb);
// })

// Pattern Printing using for Loop
const rows = 5;
for (let i = 1; i <= rows; i++) {
  let line = "";
  // Add leading spaces
  for (let j = 1; j <= rows - i; j++) {
    line += "   "; // spacing for alignment
  }
  // Add stars with spacing between them
  for (let k = 1; k <= i; k++) {
    line += "*    ";
  }
  console.log(line);
}

// Number Printing
let number = 10;
while(number >=0) {
    // console.log(number)
    number -= 1
}