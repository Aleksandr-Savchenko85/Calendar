const user = {
  name: "Sam",
};

const addPropertyV1 = (obj, key, value) => {
  obj[key] = value;
  return obj;
};

const addPropertyV2 = (obj, key, value) => {
  const keys = { [key]: value };
  return Object.assign(obj, keys)
}

const addPropertyV3 = (obj, key, value) => {
  const keys = { [key]: value };
  let user_copy = Object.assign({}, obj, keys)
  return user_copy;

};

const addPropertyV4 = (obj, key, value) => {
  let user_copy = { [key]: value };
  return Object.assign({ ...obj }, user_copy)
}

console.log(addPropertyV1(user, 'age', 25));
console.log(addPropertyV2(user, 'age', 25));
console.log(addPropertyV3(user, 'age', 25));
console.log(addPropertyV4(user, 'age', 25));

