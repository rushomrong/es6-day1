/**
 * Truthy:
 * 1. true
 * 2. any number (+ve, -ve) will be truthy other than 0
 *
 *
 * Falsy:
 * 1. false
 * 2. 0
 *
 */

const x = -5;

if (x) {
  console.log("The value of x is truthy");
} else {
  console.log("the value of x is falsy");
}

// check falsy

const y = null;
if (!y) {
  console.log("value is truthy");
}

// check true
// double bang bang "!!"
const z = " ";
if (!!x) {
  console.log("the value is truthy");
}
