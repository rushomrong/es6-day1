//? clouser function

function kitchen() {
  let roast = 0;
  return function () {
    roast++;
    return roast;
  };
}

const firstServer = kitchen();
console.log(firstServer());

//! counter watch function
//! call one function to another function to access inner function

function stopWatch() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

const watch = stopWatch();
console.log(watch());
