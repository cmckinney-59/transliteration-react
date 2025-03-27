import { useState } from 'react';
import './Transliterator.css'

import TransliterateButton from '../Buttons/TransliterateButton';
import QuestionDialog from '../Dialog/QuestionDialog';
import { PHONETIC_LETTERS } from '../../phonetic-letters';

export default function Transliterator({
  title
  }) {

  const [text, setText] = useState("");
  const [transliteratedText, setTransliteratedText] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const textareaHasText = text.length > 0;
  let showDialog = null;
  let isBaybayin = title === 'Baybayin';
  let isAurebesh = title === 'Aurebesh';
  let isDeseret = title === 'Deseret';

  const handleTransliterate = () => {
    const wordsArray = text.split(/\s+/);
    const wordsAlphabeticalOrder = wordsArray.sort((a, b) => a.localeCompare(b));
    const wordsDuplicatesRemoved = wordsAlphabeticalOrder.filter((word, index, arr) => index === 0 || word !== arr[index - 1]);
    const wordsDictionary = wordsDuplicatesRemoved.reduce((dict, word) => {
      dict[word] = "";
      return dict;
    }, {});
  

    for (const key of Object.keys(wordsDictionary)) {
      const wordIncludesQuestion = /ch|qu|c|j/i.test(key);
      
      if (wordIncludesQuestion) {
        setIsDialogOpen(true);
        return key;
      }

      runAgainstRules(key)
    }
  }

  function runAgainstRules (text) {
    if (isBaybayin) {
      setTransliteratedText(processBaybayinText(text));
    } else {
      setTransliteratedText(text);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  function getPhoneticData(text) {
    text = text.toLowerCase();
  
    if (text.includes("ch")) return PHONETIC_LETTERS.CH;
    if (text.includes("c") && !text.includes("ch")) return PHONETIC_LETTERS.C;
    if (text.includes("qu")) return PHONETIC_LETTERS.QU;
    if (text.includes("j")) return PHONETIC_LETTERS.J;
  
    return null;
  }

  // Shows the dialog asking the user questions about phonetics
  if (isDialogOpen) {
    const phoneticData = getPhoneticData(text);
  
    if (phoneticData) {
      showDialog = (
        <QuestionDialog
          enteredText={text}
          onClick={handleCloseDialog}
          phoneticQuestionChar={phoneticData.phoneticQuestion}
          phoneticAnswerChar1={phoneticData.phoneticAnswer1}
          phoneticAnswerChar2={phoneticData.phoneticAnswer2}
          phoneticAnswerChar3={phoneticData.phoneticAnswer3 || null} // Handle missing answers
        />
      );
    }
  }

  return (
    <div>
      <h2>{title} Transliterator</h2>
        <div className="transliteration-container">
          <textarea
            className="transliteration-textarea"
            placeholder="Enter text to be transliterated here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <p
            className={`transliteration-output ${
              textareaHasText ? 
                (isBaybayin ? "baybayin-font" :
                 isAurebesh ? "aurebesh-font" :
                 isDeseret ? "deseret-font" :
                "")
              : ""
              }`}>
            {transliteratedText || "Transliterated text..."}
          </p>
        </div>
        <p>{transliteratedText}</p>
        <div>
          <TransliterateButton
          isActive={textareaHasText} 
          onClick={handleTransliterate}
          text={text}/>
        </div>
      {showDialog}
    </div>
  )

  
  function processBaybayinText(text) {
    let processedText = toLowerCaseText(text);
    processedText = replaceShWithSiy(processedText);
    processedText = replacePhWithF(processedText);
    processedText = replaceThWithT(processedText);
    processedText = replaceXWithKs(processedText);
    processedText = capitalizeSubsequentVowels(processedText);
    processedText = removeDuplicateConsonants(processedText);
    processedText = replaceNgAndMga(processedText);
    processedText = replaceNgWithCapitalN(processedText);
    processedText = addPlusIfConsonant(processedText);
    processedText = removeAAfterConsonant(processedText);
    processedText = capitalizeVowel(processedText);
    processedText = removeDash(processedText);
    return processedText;
  }

  function toLowerCaseText(text) {
    return text.toLowerCase();
  }

  function replaceShWithSiy(text) {
    return text.replace(/sh/g, 'siy');
  }

  function replacePhWithF(text) {
    return text.replace(/ph/g, 'f');
  }

  function replaceThWithT(text) {
    return text.replace(/th/g, 't');
  }

  function replaceXWithKs(text) {
    return text.replace(/x/g, 'k+s');
  }

  function capitalizeSubsequentVowels(text) {
    const vowelRegex = /([aeiou])([aeiou]+)/gi;
    return text.replace(vowelRegex, (firstVowel, subsequentVowels) => {
      return firstVowel + subsequentVowels.toUpperCase();
    });
  }

  function removeDuplicateConsonants(text) {
    const consonantRegex = /([bcdfghjklmnpqrstvwxyz])\1+/gi;
    return text.replace(consonantRegex, '$1');
  }

  function replaceNgAndMga(text) {
    return text.replace(/ ng /g, ' naN ').replace(/ mga /g, ' maNa ');
  }

  function replaceNgWithCapitalN(text) {
    return text.replace(/ng/g, 'N');
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
    
          if (i < word.length - 1 && consonantRegex.test(word[i]) && consonantRegex.test(word[i + 1])) {
            transformedWord += '+';
          }
    
          if (i < word.length - 1 && consonantRegex.test(word[i]) && punctuationRegex.test(word[i + 1])) {
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
    return text.replace(/([BbCcDdFfGgHhJjKkLlMmNnPpQqRrSsTtVvWwXxYyZz])a/g, '$1');
  }

  function capitalizeVowel(text) {
    return text.replace(/([.!?])\s*([aeiou])|(^|\s)([aeiou])/gi, (p1, p2, p3, p4) => {
      return (p1 ? p1 : p3) + (p2 ? p2.toUpperCase() : p4 ? p4.toUpperCase() : '');
    });
  }

  function removeDash(text) {
    return text.replace(/-/g, '');
  }
}