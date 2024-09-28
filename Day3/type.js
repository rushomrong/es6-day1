// primitive type : number string boolean

const a = 5;
const b = "Tmar name ki";
const d = true;

//javascript is a dynamic language

//non-primitive type
const ages = [45, 65, 35];
const student = { id: 10, class: 7 };
console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

///value sharing
let x = 5;
let y = x;

console.log(x, y);
y = 7;

console.log(x, y);
