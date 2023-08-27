const reverseString = require('./reverseString')

describe('reverseString', () => {
  test('reverses single word', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });

  ('reverses multiple words', () => {
    expect(reverseString('hello there')).toEqual('ereht olleh')
  })

  skip('works with numbers and punctuation', () => {
    expect(reverseString('123! abc!')).toEqual('!cba !321')
  })
  skip('works with blank strings', () => {
    expect(reverseString('')).toEqual('')
  })
});
