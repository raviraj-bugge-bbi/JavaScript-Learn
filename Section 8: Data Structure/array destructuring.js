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
  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        if ((j * j) == i) {
          console.log(i);
          break;
        }
      }
    }
  }
}