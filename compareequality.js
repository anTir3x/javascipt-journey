// Setup
function compareEquality(a, b /* parameters */) {
    if (a === b) { // Change this line
      return "Equal"; 
    }
    return "Not Equal";
  }
  
  console.log(compareEquality(10, 10));

  // === does not perform type conversion 
  // == performs type conversion when 