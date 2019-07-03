let x = 10;
let j = 0;
while (j <= x) {
  console.log(j * 9);
  j++;
}

for (let i = 0; i <= x; i++) {
  console.log(i * 9);
}

j = 0;
while (j <= x * 9) {
  console.log(j);
  j += 9;
}

for (let i = 0; i <= x * 9; i += 9) {
  console.log(i);
}
