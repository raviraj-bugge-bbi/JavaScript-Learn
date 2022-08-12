`use strict`;

//Function for checking 'n' is perfect square number or not
function isPerfectSquare(n) {
  if (n < 0) {
    return (`${n} is a negative number`);
  } else {
    for (let i = 1; i <= n; i++) {
      if (i * i == n) {
        return `${n} is perfect number`;
      }
    }
  }
  return `${n} is not perfect number`;
}

//Function for printing all perfect square numbers till 'n'
function perfectSquare(n) {
  for (let i = 1; i <= n; i++) {
    if (checkPerfectSquare(i) == i) {
      console.log(i);
    }
  }
}

function checkPerfectSquare(n) {
  for (i = 1; i <= n; i++) {
    if ((i * i) == n) {
      return n;
    }
  }
}