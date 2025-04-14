import { useState, useEffect } from "react";
import "./Transliterator.css";

import TransliterateButton from "../Buttons/TransliterateButton";
import QuestionDialog from "../Dialog/QuestionDialog";
import processBaybayinText from "../Utils/BaybayinTextProcessor";
import { PHONETIC_LETTERS } from "../../phonetic-letters";

function getPhoneticData(text) {
  const lower = text.toLowerCase();

  switch (true) {
    case /[A-Z]/.test(text):
      return PHONETIC_LETTERS.none;
    case lower.includes("ch"):
      return PHONETIC_LETTERS.CH;
    case lower.includes("qu"):
      return PHONETIC_LETTERS.QU;
    case lower.includes("c") && !lower.includes("ch"):
      return PHONETIC_LETTERS.C;
    case lower.includes("j"):
      return PHONETIC_LETTERS.J;
    default:
      return PHONETIC_LETTERS.none;
  }
}

function getNextDialogWord(dictionary) {
  return Object.keys(dictionary).find(
    (word) =>
      dictionary[word] === "" && (/ch|qu|c|j/i.test(word) || /[A-Z]/.test(word))
  );
}

export default function Transliterator({ title }) {
  const [text, setText] = useState("");
  const [transliteratedText, setTransliteratedText] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogWord, setDialogWord] = useState("");
  const [wordsDictionary, setWordsDictionary] = useState({});

  useEffect(() => {
    if (!isDialogOpen) {
      const nextWord = getNextDialogWord(wordsDictionary);
      if (nextWord) {
        setDialogWord(nextWord);
        setIsDialogOpen(true);
      }
    }
  }, [isDialogOpen, wordsDictionary]);

  const phoneticData = getPhoneticData(dialogWord);
  const textareaHasText = text.length > 0;
  let showDialog = null;
  let isBaybayin = title === "Baybayin";
  let isAurebesh = title === "Aurebesh";
  let isDeseret = title === "Deseret";

  const handleTransliterate = () => {
    const initialDict = text
      .trim()
      .split(/\s+/)
      .reduce((dict, word) => {
        dict[word] = "";
        return dict;
      }, {});

    setWordsDictionary(initialDict);

    for (const word of Object.keys(initialDict)) {
      const needsDialog = /ch|qu|c|j/i.test(word) || /[A-Z]/.test(word);

      if (needsDialog) {
        setDialogWord(word);
        setIsDialogOpen(true);
        break; // Stop and wait for dialog before continuing
      } else {
        const result = runAgainstRules(word);
        initialDict[word] = result;
      }
    }

    setTransliteratedText(
      text
        .trim()
        .split(/\s+/)
        .map((word) => initialDict[word])
        .join(" ")
    );
  };

  const handleSkip = () => {
    const updatedDict = { ...wordsDictionary };
    updatedDict[dialogWord] = runAgainstRules(dialogWord);

    const nextWord = getNextDialogWord(updatedDict);
    if (nextWord) {
      setDialogWord(nextWord);
      setIsDialogOpen(true);
    } else {
      setTransliteratedText(runAgainstRules(updatedDict));
    }

    setWordsDictionary(updatedDict);

    if (nextWord) {
      setDialogWord(nextWord);
      setIsDialogOpen(true);
    } else {
      setIsDialogOpen(false);
    }

    // Update transliterated output
    const finalOutput = text
      .trim()
      .split(/\s+/)
      .map((word) =>
        updatedDict[word] !== "" ? updatedDict[word] : runAgainstRules(word)
      )
      .join(" ");
    setTransliteratedText(finalOutput);
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

  const handleProperNounEntered = (properNounAnswer) => {
    const updatedDict = { ...wordsDictionary };

    updatedDict[dialogWord] = runAgainstRules(properNounAnswer);

    setWordsDictionary(updatedDict);
    setIsDialogOpen(false);

    const nextWord = getNextDialogWord(updatedDict);
    if (nextWord) {
      setDialogWord(nextWord);
      setIsDialogOpen(true);
    } else {
      setTransliteratedText(runAgainstRules(updatedDict));
    }

    // Finally, update the final output
    const finalOutput = text
      .trim()
      .split(/\s+/)
      .map((word) =>
        updatedDict[word] !== "" ? updatedDict[word] : runAgainstRules(word)
      )
      .join(" ");
    setTransliteratedText(finalOutput);
  };

  const handlePhoneticAnswerSelected = (selectedAnswer) => {
    const updatedWord = dialogWord.replace(
      new RegExp(phoneticData.phoneticQuestion, "gi"),
      selectedAnswer
    );

    const updatedDict = { ...wordsDictionary };
    updatedDict[dialogWord] = runAgainstRules(updatedWord);

    setWordsDictionary(updatedDict);
    setIsDialogOpen(false);

    const nextWord = getNextDialogWord(updatedDict);
    if (nextWord) {
      setDialogWord(nextWord);
      setIsDialogOpen(true);
    } else {
      setTransliteratedText(runAgainstRules(updatedDict));
    }

    // Finally, update the final output
    const finalOutput = text
      .trim()
      .split(/\s+/)
      .map((word) =>
        updatedDict[word] !== "" ? updatedDict[word] : runAgainstRules(word)
      )
      .join(" ");
    setTransliteratedText(finalOutput);
  };

  // Shows the dialog asking the user questions about phonetics
  if (isDialogOpen) {
    const wordIncludesCapital = /[A-Z]/.test(dialogWord);
    if (wordIncludesCapital) {
      showDialog = (
        <QuestionDialog
          enteredText={dialogWord}
          close={handleCloseDialog}
          onProperNounEntered={handleProperNounEntered}
          onSkip={handleSkip}
        />
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
          onSkip={handleSkip}
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
