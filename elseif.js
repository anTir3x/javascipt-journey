// let grade = 85;  // variable

// if (grade >= 90) { // condition
//   console.log("Excellent! You've scored an A.");            // else if to be executed in certain conditions 
// } else if (grade >= 80) {
//   console.log("Well done! You've scored a B.");
// } else if (grade >= 70) {
//   console.log("Good job! You've scored a C.");
// } else if (grade >= 60) {
//   console.log("Keep trying! You've scored a D.");
// } else {
//   console.log("Unfortunately, you've scored an F. Better luck next time.");
// }
  // calling the variable 

  function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else{
  return "Between 5 and 10";
}
}

console.log(testElseIf(6)); 