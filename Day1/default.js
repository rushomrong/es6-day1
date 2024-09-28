//Default --> if value is nor provided, take this as a default value

function add(num1, num2 = 0) {
  const result = num1 + num2;
  console.log(num1, num2, result);
  return result;
}

const sum = add(5);
