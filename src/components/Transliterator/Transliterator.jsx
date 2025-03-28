import { useState } from 'react';
import './Transliterator.css'

import TransliterateButton from '../Buttons/TransliterateButton';
import QuestionDialog from '../Dialog/QuestionDialog';
import processBaybayinText from '../Utils/BaybayinTextProcessor'
import { PHONETIC_LETTERS } from '../../phonetic-letters';

function getPhoneticData(text) {
  text = text.toLowerCase();

  if (text.includes("ch")) return PHONETIC_LETTERS.CH;
  if (text.includes("c") && !text.includes("ch")) return PHONETIC_LETTERS.C;
  if (text.includes("qu")) return PHONETIC_LETTERS.QU;
  if (text.includes("j")) return PHONETIC_LETTERS.J;

  return null;
}

export default function Transliterator({
  title
  }) {

  const [text, setText] = useState("");
  const [transliteratedText, setTransliteratedText] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogWord, setDialogWord] = useState("");

  const textareaHasText = text.length > 0;
  let showDialog = null;
  let isBaybayin = title === 'Baybayin';
  let isAurebesh = title === 'Aurebesh';
  let isDeseret = title === 'Deseret';

  const handleTransliterate = () => {
    const wordsArray = text.split(/\s+/);
    const wordsAlphabeticalOrder = wordsArray.sort((a, b) => a.localeCompare(b));
    const wordsDuplicatesRemoved = wordsAlphabeticalOrder.filter(
      (word, index, arr) => index === 0 || word !== arr[index - 1]
    );
    const wordsDictionary = wordsDuplicatesRemoved.reduce((dict, word) => {
      dict[word] = "";
      return dict;
    }, {});


    for (const key of Object.keys(wordsDictionary)) {
      const wordIncludesQuestion = /ch|qu|c|j/i.test(key);
      const wordIncludesCapital = /[A-Z]/.test(key);

      if (wordIncludesQuestion || wordIncludesCapital) {
        setDialogWord(key);
        setIsDialogOpen(true);
      }
    }
    console.log(wordsDictionary);
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

  // Shows the dialog asking the user questions about phonetics
  if (isDialogOpen) {
    const phoneticData = getPhoneticData(text);

    if (phoneticData) {
      showDialog = (
        <QuestionDialog
          enteredText={dialogWord}
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
}