// JOSEPH P. PASAOA

console.log("Using only two loops max, log a multiplication table 1 - 10 multiplying each up to 12.");
console.log("");
//
let vertFactor = 1;
while (vertFactor <= 10) {
  console.log("== " + vertFactor + " ===========");
  for (let horiFactor = 1; horiFactor <= 12; horiFactor++) {
    console.log("   " + vertFactor + " * " + horiFactor + " = " + (vertFactor * horiFactor));
  }
  console.log("");
  vertFactor++;
}
