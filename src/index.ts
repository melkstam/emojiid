import emojis from './emojis';

export default function emojiid(length: number = 8): string {
  if (!Number.isInteger(length)) {
    throw new Error('length has to be an integer');
  }

  if (length <= 0) {
    throw new Error('length must be positive');
  }

  const id = [];
  for (let i = 0; i < length; i += 1) {
    id.push(emojis[Math.floor(Math.random() * emojis.length)]);
  }
  return id.join('');
}
