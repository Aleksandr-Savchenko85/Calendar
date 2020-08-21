const userData = {
  name: 'Sam',
};

const addPropertyV1 = (userData, userId) => {
  userData.id = userId;
  return userData;

};

const addPropertyV2 = (userData, userId) => {
  const key = { id: userId };
  return Object.assign(userData, key)

};

const addPropertyV3 = (userData, userId) => {
  const key = { id: userId };
  let userData_copy = Object.assign({}, userData, key)
  return userData_copy;

};

const addPropertyV4 = (userData, userId) => {
  let userData_copy = { id: userId };
  return Object.assign({ ...userData }, userData_copy)

};
/* const result1 = adduserIdV1(userData, '555555');
const result2 = adduserIdV2(userData, '555555');
const result3 = adduserIdV3(userData, '555555');
const result4 = adduserIdV4(userData, '555555');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
 */