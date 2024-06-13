// write code here
function mergeObjects(...objects) {
  return objects.reduce((result, obj) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = obj[key];
      }
    }
    return result;
  }, {});
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5 };

console.log(mergeObjects(obj1, obj2, obj3));

