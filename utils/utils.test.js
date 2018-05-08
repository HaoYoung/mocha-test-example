const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);
  
  expect(res).toBe(44).toBeA('number');
}); 

it('should square a number', () => {
  var res = utils.square(5);
  
  expect(res).toBe(25).toBeA('number');
});