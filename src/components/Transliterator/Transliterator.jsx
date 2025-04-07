import { useState } from "react";
import "./Transliterator.css";

import TransliterateButton from "../Buttons/TransliterateButton";
import QuestionDialog from "../Dialog/QuestionDialog";
import processBaybayinText from "../Utils/BaybayinTextProcessor";
import { PHONETIC_LETTERS } from "../../phonetic-letters";

function getPhoneticData(text) {
  //TODO: Try making switch statement
  if (/[A-Z]/.test(text)) return PHONETIC_LETTERS.none;
  if (/ch/i.test(text)) return PHONETIC_LETTERS.CH;
  if (/c/i.test(text) && !/ch/i.test(text)) return PHONETIC_LETTERS.C;
  if (/qu/i.test(text)) return PHONETIC_LETTERS.QU;
  if (/j/i.test(text)) return PHONETIC_LETTERS.J;

  return PHONETIC_LETTERS.none;
}

export default function Transliterator({ title }) {
  const [text, setText] = useState("");
  const [transliteratedText, setTransliteratedText] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogWord, setDialogWord] = useState("");

  const phoneticData = getPhoneticData(text);
  const textareaHasText = text.length > 0;
  let showDialog = null;
  let isBaybayin = title === "Baybayin";
  let isAurebesh = title === "Aurebesh";
  let isDeseret = title === "Deseret";

  const handleTransliterate = () => {
    const wordsDictionary = text
      .trim()
      .split(/\s+/)
      .reduce((dict, word) => {
        dict[word] = "";
        return dict;
      }, {});

    for (const word of Object.keys(wordsDictionary)) {
      const wordIncludesQuestion = /ch|qu|c|j/i.test(word);
      const wordIncludesCapital = /[A-Z]/.test(word);

      if (wordIncludesQuestion || wordIncludesCapital) {
        setDialogWord(word);
        setIsDialogOpen(true);
        // You probably want to wait for dialog response before updating the dictionary
      } else {
        const result = runAgainstRules(word);
        wordsDictionary[word] = result;
      }
    }

    console.log(wordsDictionary);
    const finalOutput = text
      .trim()
      .split(/\s+/)
      .map((word) => wordsDictionary[word])
      .join(" ");
    setTransliteratedText(finalOutput);
    console.log(finalOutput);
  };

  function runAgainstRules(text) {
    if (isBaybayin) {
      return processBaybayinText(text);
    } else {
      return text;
    }
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handlePhoneticAnswerSelected = (selectedAnswer) => {
    const updatedWord = dialogWord.replace(
      new RegExp(phoneticData.phoneticQuestion, "gi"),
      selectedAnswer
    );

    const updatedText = text.replace(
      new RegExp(`\\b${dialogWord}\\b`, "gi"),
      updatedWord
    );

    setTransliteratedText(updatedText);
  };

  // Shows the dialog asking the user questions about phonetics
  if (isDialogOpen) {
    const wordIncludesCapital = /[A-Z]/.test(dialogWord);
    if (wordIncludesCapital) {
      showDialog = (
        <QuestionDialog enteredText={dialogWord} close={handleCloseDialog} />
      );
    } else if (phoneticData) {
      showDialog = (
        <QuestionDialog
          enteredText={dialogWord}
          close={handleCloseDialog}
          phoneticQuestionChar={phoneticData.phoneticQuestion}
          phoneticAnswerChar1={phoneticData.phoneticAnswer1}
          phoneticAnswerChar2={phoneticData.phoneticAnswer2}
          phoneticAnswerChar3={phoneticData.phoneticAnswer3 || null}
          onPhoneticAnswerSelected={handlePhoneticAnswerSelected}
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
            textareaHasText
              ? isBaybayin
                ? "baybayin-font"
                : isAurebesh
                ? "aurebesh-font"
                : isDeseret
                ? "deseret-font"
                : ""
              : ""
          }`}
        >
          {transliteratedText || "Transliterated text..."}
        </p>
      </div>
      <p>{transliteratedText}</p>
      <div>
        <TransliterateButton
          isActive={textareaHasText}
          onClick={handleTransliterate}
          text={text}
        />
      </div>
      {showDialog}
    </div>
  );
}
