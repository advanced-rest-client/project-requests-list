/* global chance */
const methods = ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'HEAD'];
const methodsSize = methods.length - 1;
const DataGenerator = {};
DataGenerator.genRequestObject = function() {
  const methodIndex = chance.integer({min: 0, max: methodsSize});
  const obj = {
    _id: chance.string({length: 5}),
    name: chance.sentence({words: 2}),
    method: methods[methodIndex],
    url: chance.url()
  };
  return obj;
};
DataGenerator.generateRequests = function(size) {
  size = size || 25;
  const result = [];
  for (let i = 0; i < size; i++) {
    result.push(DataGenerator.genRequestObject());
  }
  return result;
};
