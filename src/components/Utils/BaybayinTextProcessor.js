export default function processBaybayinText(text) {
    let processedText = text.toLowerCase();
    processedText = processedText.replace(/sh/g, 'siy');
    processedText = processedText.replace(/ph/g, 'f');
    processedText = processedText.replace(/th/g, 't');
    processedText = processedText.replace(/x/g, 'k+s');
    processedText = capitalizeSubsequentVowels(processedText);
    processedText = removeDuplicateConsonants(processedText);
    processedText = processedText.replace(/ ng /g, ' naN ').replace(/ mga /g, ' maNa ');
    processedText = processedText.replace(/ng/g, 'N');
    processedText = addPlusIfConsonant(processedText);
    processedText = removeAAfterConsonant(processedText)
    processedText = capitalizeVowel(processedText);
    processedText = processedText.replace(/-/g, '');
    return processedText;
  }

  function capitalizeSubsequentVowels(text) {
    const vowelRegex = /([aeiou])([aeiou]+)/gi;
    return text.replace(vowelRegex, (firstVowel, subsequentVowels) =>  firstVowel + subsequentVowels.toUpperCase());
  }

  function removeDuplicateConsonants(text) {
    const consonantRegex = /([bcdfghjklmnpqrstvwxyz])\1+/gi;
    return text.replace(consonantRegex, '$1');
  }

  function addPlusIfConsonant(text) {
    const consonantRegex = /[bcdfghjklmnpqrstvwxyz]/i;
    const punctuationRegex = /[.,!?;-]/;

      if (!text.trim()) {
        return '';
      }

      return text.split(' ').map(word => {
        if (!word.trim()) {
          return word;
        }

        let transformedWord = '';

        for (let i = 0; i < word.length; i++) {
          transformedWord += word[i];

          if (word[i] === ' ' || word[i + 1] === ' ') {
            continue;
          }

          if (i < word.length - 1 && consonantRegex.test(word[i]) && (consonantRegex.test(word[i + 1]) || punctuationRegex.test(word[i + 1]))) {
            transformedWord += '+';
          }
        }

        if (consonantRegex.test(word[word.length - 1])) {
          transformedWord += '+';
        }
        return transformedWord;
      }).join(' ').trim();
    }

  function removeAAfterConsonant(text) {
    return text.replace(/([bcdfghjklmnpqrstvwxyz])a/gi, '$1');
  }

  function capitalizeVowel(text) {
    return text.replace(/([.!?])\s*([aeiou])|(^|\s)([aeiou])/gi, (p1, p2, p3, p4) => (p1 ? p1 : p3) + (p2 ? p2.toUpperCase() : p4 ? p4.toUpperCase() : ''));
  }
