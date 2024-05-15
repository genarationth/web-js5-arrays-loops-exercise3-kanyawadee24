// ex3
for (let i = 1; i < 6; i++) {
  let star = "";
  for (let j = 0; j < i; j++) {
    star += "*";
  }
  console.log(star);
}

// ex4

x = 10;
while (x > 0 && x !== 0) {
  x -= 0.5;
  console.log(x);
}

let y = 1;
while (y < 100) {
  if (y % 2 !== 0) {
    console.log(y);
  }
  y++;
}

let n = 6;
let i = 1;
while (i <= n) {
  console.log(i);
  i++;
}

let sum = 0;
let z = 1;
let m = 5;
while (z <= m) {
  sum += z;
  z += 1;
}

console.log(sum);
