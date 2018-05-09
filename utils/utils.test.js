const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);
  
  expect(res).toBe(44).toBeA('number');
}); 

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3 , (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should square a number', () => {
  var res = utils.square(5);
  
  expect(res).toBe(25).toBeA('number');
});

it('should async square a number', (done) => {
  utils.asyncSquare(5, (res) => {
    expect(res).toBe(25).toBeA('number');
    done();
  });
});

it('should set firstName and lastName', () => {
  var user = {location: 'Iowa city', age: 24};
  var res = utils.setName(user, 'Hao Yang');
  
  expect(res).toInclude({
    firstName: 'Hao',
    lastName: 'Yang'
  });
});

it('should expect some values', () => {
  //expect(12).toNotBe(11);
  //expect({name: 'Hao'}).toEqual({name: 'Hao'});
  //expect([2,3,4]).toInclude(3);
  //expect([2,3,4]).toExclude(5);
  expect({
    name: 'Hao',
    age: 24,
    location: 'Iowa City'
  }).toInclude({
    age: 24
  });
});

