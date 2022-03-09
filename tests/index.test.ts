import emojiid from '../src';

it.each([
  0.1,
  -3.53,
  Math.PI,
  Infinity,
  -Infinity,
  NaN,
  5.000000000000001,
  [1],
  true,
  false,
  '8',
])('should throw an error if length is %p (not an integer)', (length: unknown) => {
  expect(() => emojiid(length as number)).toThrow(Error);
});

it.each([
  0,
  -3,
  -10,
])('should throw an error length is %i (non-positive)', (length: number) => {
  expect(() => emojiid(length)).toThrow(Error);
});

it('should have default length of 8', () => {
  const id = emojiid();

  expect(id).toHaveLength(8 * 2);
});

it.each([
  1,
  4,
  8,
  9,
  32,
])('should generate a id of length %i', (length: number) => {
  const id = emojiid(length);

  expect(id).toHaveLength(length * 2);
});
