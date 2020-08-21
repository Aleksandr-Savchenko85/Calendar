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
/* const result1 = adduserIdV1(userData, '555555');
const result2 = adduserIdV2(userData, '555555');
const result3 = adduserIdV3(userData, '555555');
const result4 = adduserIdV4(userData, '555555');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
 */