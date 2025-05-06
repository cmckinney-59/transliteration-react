export default function processBaybayinText(text: string): string {
  let transliteratedText = text.toLowerCase();
  transliteratedText = transliteratedText.replace(/sh/g, "siy");
  transliteratedText = transliteratedText.replace(/ph/g, "f");
  transliteratedText = transliteratedText.replace(/th/g, "t");
  transliteratedText = transliteratedText.replace(/x/g, "k+s");
  transliteratedText = capitalizeSubsequentVowels(transliteratedText);
  transliteratedText = removeDuplicateConsonants(transliteratedText);
  transliteratedText = transliteratedText
    .replace(/\bng\b/g, "naN")
    .replace(/\bmga\b/g, "maNa");
  transliteratedText = transliteratedText.replace(/ng/g, "N");
  transliteratedText = addPlusIfConsonant(transliteratedText);
  transliteratedText = removeAAfterConsonant(transliteratedText);
  transliteratedText = capitalizeVowel(transliteratedText);
  transliteratedText = transliteratedText.replace(/-/g, "");
  return transliteratedText;
}

function capitalizeSubsequentVowels(text: string): string {
  const vowelRegex = /([aeiou])([aeiou]+)/gi;
  return text.replace(
    vowelRegex,
    (_match: string, firstVowel: string, subsequentVowels: string) =>
      firstVowel + subsequentVowels.toUpperCase()
  );
}

function removeDuplicateConsonants(text: string): string {
  const consonantRegex = /([bcdfghjklmnpqrstvwxyz])\1+/gi;
  return text.replace(consonantRegex, "$1");
}

function addPlusIfConsonant(text: string): string {
  const consonantRegex = /[bcdfghjklmnpqrstvwxyz]/i;
  const punctuationRegex = /[.,!?;-]/;

  if (!text.trim()) {
    return "";
  }

  return text
    .split(" ")
    .map((word: string) => {
      if (!word.trim()) {
        return word;
      }

      let transformedWord = "";

      for (let i = 0; i < word.length; i++) {
        transformedWord += word[i];

        if (word[i] === " " || word[i + 1] === " ") {
          continue;
        }

        if (
          i < word.length - 1 &&
          consonantRegex.test(word[i]) &&
          (consonantRegex.test(word[i + 1]) ||
            punctuationRegex.test(word[i + 1]))
        ) {
          transformedWord += "+";
        }
      }

      if (consonantRegex.test(word[word.length - 1])) {
        transformedWord += "+";
      }

      return transformedWord;
    })
    .join(" ")
    .trim();
}

function removeAAfterConsonant(text: string): string {
  return text.replace(/([bcdfghjklmnpqrstvwxyz])a/gi, "$1");
}

function capitalizeVowel(text: string): string {
  return text.replace(
    /([.!?])\s*([aeiou])|(^|\s)([aeiou])/gi,
    (_match: string, p1: string, p2: string, p3: string, p4: string) =>
      (p1 ? p1 : p3) + (p2 ? p2.toUpperCase() : p4 ? p4.toUpperCase() : "")
  );
}
