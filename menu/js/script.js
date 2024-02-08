//Destructuring in array
// let a =[0,1,2,,3,4,5];
// // let [p1,p2,p3,p4,p5]=a;
// console.log(a[4]);

//Destructuring in object 
// const obj = { a: 1, b: 2 };
// const { a, b } = obj;
// console.log(b);

// let object = { a: 1, b: { c: 2 } };
// let {
//   a,
//   b: { c: d },
// } = object;
// console.log(a+d);

// const obj = { a: 1, b: { c: 2 } };
// const { a } = obj; // a is constant
// let {
//   b: { c: d }}=obj;
//   console.log(a);

// const numbers = [];
// const obj = { a: 1, b: 2,c:3,d:9 };
// const{d}=obj;
// console.log(d)
// ({ a: numbers[0], b: numbers[1] } = obj);
// The properties `a` and `b` are assigned to properties of `numbers`

const [a = 1] = []; 
const { b = 2 } = { b: undefined }; 
const { c = 2 } = { c: null }; 
console.log(a,b,c);