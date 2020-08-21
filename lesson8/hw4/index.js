const userData = {
  name: 'Boby',
};

const addPropertyV1 = (userData, userld) => {
  userData.id = userld;
  return userData;

};

const addPropertyV2 = (userData, userld) => {
  const key = { id: userld };
  return Object.assign(userData, key)

};

const addPropertyV3 = (userData, userld) => {
  const key = { id: userld };
  let userData_copy = Object.assign({}, userData, key)
  return userData_copy;

};

const addPropertyV4 = (userData, userld) => {
  let userData_copy = { id: userld };
  return Object.assign({ ...userData }, userData_copy)
}
const result1 = addPropertyV1(userData, '555');
const result2 = addPropertyV2(userData, '555');
const result3 = addPropertyV3(userData, '555');
const result4 = addPropertyV4(userData, '555');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
