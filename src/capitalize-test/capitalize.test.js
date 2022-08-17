const capitalize = require('./capitalize');

test('capitalize hello to be Hello', () => {
  //Arrange
  const str = 'hello';
  //Act
  const result = capitalize(str);
  //Assert
  expect(result).toBe('Hello');
});
