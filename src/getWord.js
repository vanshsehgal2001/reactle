export const getWord = (wordSet) => {
  if (wordSet === undefined) {
    return;
  }
  let items = Array.from(wordSet.wordSet);
  return items[Math.floor(Math.random() * items.length)];
};
