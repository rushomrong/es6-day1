//data access

// objects in inner array
const data = [{ id: 1, name: "abul", address: "khilkhet" }];
console.log(data[0].address);

//practice
const product = {
  count: 5000,
  data: [
    { id: 1, name: "Samsung", price: 39000 },
    { id: 2, name: "iphone 16 pro", price: 175000 },
  ],
};

// taking the data sl 2 no
// console.log(product.data[1]);
console.log(product.data[1].price);

const user1 = {
  info: [
    { road: 18, house: "Ka-22/a", thikana: "dhaka" },
    { road: 12, house: "Ka-22" },
  ],
};

console.log(user1.info[0].house);
