//1
const data = { a: 1 };
//write your code here
function isPlainObject(obj) {
  if (typeof obj === "object" && obj !== null && !Array.isArray(obj)) {
    return true;
  } else {
    return false;
  }
}
console.log(isPlainObject(data)); // true
console.log(isPlainObject([1, 2, 3])); // false
console.log(isPlainObject(null)); // false
// console.log(typeof null);
console.log(`----------------------------------`);
//2
const data2 = { a: 1, b: 2 };
//write your code here
/*
function makePairs(obj) {
  const arr = [];
  for (const key in obj) {
    console.log(key);
    console.log(obj[key]);
    arr.push([key, obj[key]]);
  }
  return arr;
}
console.log(makePairs(data2)); // [['a', 1], ['b', 2]]
*/
// const data2 = { a: 1, b: 2 };
//write your code here
function makePairs(obj) {
  let entries = Object.entries(obj);
  // let keys = Object.keys(obj);
  // let values = Object.values(obj);
  // console.log(keys);
  // console.log(values);
  // console.log(entries);
  return entries;
}
console.log(makePairs(data2));
console.log(`----------------------------------`);
//3
const data3 = { a: 1, b: 2 };
// const obj = {};
//write your code here
function without(x, y) {
  delete x[y];
  return x;
}
console.log(without(data3, "b")); // { a: 1 }
console.log(`---------------Q4-------------------`);
const data4 = { a: 1, b: undefined };
const data40 = { a: undefined };
// write your code here
function isEmpty(obj) {
  // console.log(Object.keys(obj));
  if (Object.keys(obj).length === 0 || obj[Object.keys(obj)[0]] === undefined) {
    return true;
  } else {
    return false;
  }
}
console.log(isEmpty({})); // true
console.log(isEmpty(data4)); // false
console.log(isEmpty(data40)); // true
/*
function isEmpty(obj) {
  let objVal = Object.values(obj);
  if (objVal.length > 0 && objVal.some((element) => element !== undefined)) {
    return false;
  }
  return true;
}
console.log(isEmpty(data4)); // false
console.log(isEmpty({}));
console.log(isEmpty(data40)); // true
*/
console.log(`----------------------------------`);
//5
const data5 = { a: 1, b: 1 };
const data51 = { a: 1, b: 1 };
const data52 = { a: 1, b: 2 };
//write your code here
function isEqual(a, b) {
  console.log(JSON.stringify(a));
  if (JSON.stringify(a) === JSON.stringify(b)) {
    return true;
  } else {
    return false;
  }
}
// const isEqual = (object1, object2) =>
//   JSON.stringify(Object.entries(object1).sort()) ===
//   JSON.stringify(Object.entries(object2).sort());
// function isEqual(a, b) {
//   for (var key in a) {
//     if (a[key] !== b[key]) {
//       return false;
//     }
//   }
//   return true;
// }
console.log(isEqual(data5, data51)); // true
console.log(isEqual(data5, data52)); // false
console.log(`----------------------------------`);
//6
const data6 = { a: { b: [1, 2, 3] } };
//write your code here
function invoke(obj, ab, spl, arr) {
  const newArr = ab.split(".");
  console.log(newArr);
  const result = newArr.reduce((acc, key) => {
    console.log(`Key is ${key}`);
    console.log(`acc[key] ${acc[key]}`);
    console.log(`obj[key] ${obj[key]}`);
    acc = acc[key] === undefined ? obj[key] : acc[key];
    return acc;
  }, {});
  // console.log(result);
  console.log(Array.prototype[spl].apply(result, arr));
  // obj[]
  // console.log(obj);
  return obj;
}
// function invoke(obj, str, func, arr) {
//   const code = "obj" + "." + str + "." + func + "(" + arr + ");";
//   console.log(code);
//   return eval(code);
// }
console.log(invoke(data6, "a.b", "splice", [1, 2])); // [2, 3]
// console.log(data6.a.b.splice(1, 2, [1, 2]));
/*
//7
const data7 = { a: { b: undefined } };
//write your code here
console.log(isEmptyDeep(data7));
//8
const data8 = { a: 1, b: { c: 1 } };
const data81= { a: 1, b: { c: 1 } };
const data82= { a: 1, b: { c: 2 } };
//write your code here
console.log(isEqualDeep(data8, data81));// true
console.log(isEqualDeep(data8, data82)); // false
//9
const data9 = { a: 1, b: 2 };
const data91 = { c: 1, b: 2 };
//write your code here
console.log(intersection(data9, data91)); // { b: 2 }
//10
const data10 = { a: 1, b: { c: 3 } };
const data11 = { c: 1, b: { c: 3 } };
//write your code here
console.log(intersectionDeep(data10, data11)); // { b: { c: 3 } }
*/