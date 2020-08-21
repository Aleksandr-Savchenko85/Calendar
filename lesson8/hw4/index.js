const obj = {
  name: 'Sam',
};

const addPropertyV1 = (obj, property) => {
  obj.id = property;
  return obj;

};

const addPropertyV2 = (obj, property) => {
  const key = { id: property };
  return Object.assign(obj, key)

};

const addPropertyV3 = (obj, property) => {
  const key = { id: property };
  let obj_copy = Object.assign({}, obj, key)
  return obj_copy;

};

const addPropertyV4 = (obj, property) => {
  let obj_copy = { id: property };
  return Object.assign({ ...obj }, obj_copy)

};
/* const result1 = addPropertyV1(obj, '555555');
const result2 = addPropertyV2(obj, '555555');
const result3 = addPropertyV3(obj, '555555');
const result4 = addPropertyV4(obj, '555555');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
 */