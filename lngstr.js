function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = '';
    let longestLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, '');
  
      if (cleanedWord.length > longestLength) {
        longestWord = cleanedWord;
        longestLength = cleanedWord.length;
      }
    }
  
    return longestWord;
  }
  
  const inputString = prompt("Enter a sentence:");
  const longestWord = findLongestWord(inputString);
  console.log(`The longest word in the sentence is: ${longestWord}`);
  