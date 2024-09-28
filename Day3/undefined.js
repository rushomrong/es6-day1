let first;

function second(a, b) {
  const total = a + b;
}

//call the function
const result = second;

function third(a, b, c, d) {
  const total = a + b + c + d;
  console.log(a, b, c, d);
}

third(2, 5);

// no negative
function noNegative(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return a + b;
}

const total = noNegative(2, -5);
console.log(total);

//deleting an element inside an array
const sixth = [4, 8, 10, 65, 20];
delete sixth[1]; //never delete like this

console.log(sixth[1], sixth[5], sixth[200]);
