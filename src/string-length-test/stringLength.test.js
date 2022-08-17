const stringLength = require('./stringLength');

test('Length of the string to be 5', () => {
  //Arrange
  const str = 'hello';
  //Act
  const result = stringLength(str);
  //Assert
  expect(result).toBe(5);
});

test('Length of the string to be invalid', () => {
  //Arrange
  const str = '';
  //Act
  const result = stringLength(str);
  //Assert
  expect(result).toBe('invalid string length');
});

test('Length of the string to be invalid', () => {
  //Arrange
  const str = 'hello world';
  //Act
  const result = stringLength(str);
  //Assert
  expect(result).toBe('invalid string length');
});
