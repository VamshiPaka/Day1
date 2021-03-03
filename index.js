/** Function to count no of occurences of words in a paragraph or a sentence */

let countWords = (str, word) => str.split(word).length-1;

let paragraph =
  "This paragraph contains some unrelated data created just for the sake of counting the occurrences of the words in this paragraph so will add some random strings now for for created paragraph paragraph";

console.log(countWords(paragraph, "for"));

/**Function which takes raw text as a parameter and returns clean text*/


