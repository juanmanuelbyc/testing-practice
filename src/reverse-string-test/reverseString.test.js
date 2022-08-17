const reverseString = require('./reverseString.js');

test('reversing hello to be olleh', () => {
  // Arrange
  const str = 'hello';
  // Act
  const result = reverseString(str);
  // Assert
  expect(result).toBe('olleh');
});
