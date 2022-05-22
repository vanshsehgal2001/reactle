import words from "./words.txt";

export const generateWordSet = async () => {
  let wordSet;
  await fetch(words)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      let arr = data.split("\n");
      wordSet = new Set(arr);
    });
  return { wordSet };
};
