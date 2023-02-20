let classGroup = "Arts"; // Bolatito's class group

if (classGroup === "Science") {
  console.log("Physics, Chemistry, Biology, Technical Drawing, English, Mathematics");
} else if (classGroup === "Social Science") {
  console.log("Accounting, Commerce, Marketing, Geography, English, Mathematics");
} else if (classGroup === "Arts") {
  console.log("Government, Economics, Literature, History, English, Mathematics");
} else {
  console.log("Invalid class group. Please take the General subjects: English, Mathematics");
}



function findPowerOfTwo(num) {
    let pwr = Math.pow(2, Math.round(Math.log(num) / Math.log(2)));
    console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`);
  }
  
  // Example usage:
  findPowerOfTwo(3); // Output: The number 2 is the power of 2 nearest to 3.
  findPowerOfTwo(6); // Output: The number 4 is the power of 2 nearest to 6.
  findPowerOfTwo(15); // Output: The number 8 is the power of 2 nearest to 15.
  