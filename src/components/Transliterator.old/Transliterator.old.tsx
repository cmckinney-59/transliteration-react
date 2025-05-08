import { useState, useEffect, JSX } from "react";
import "./Transliterator.old.css";

import TransliterateButton from "../Buttons/TransliterateButton.tsx";
import SaveAsButton from "../Buttons/SaveAsButton.tsx";
import QuestionDialog from "../Dialog/QuestionDialog.tsx";
import processBaybayinText from "../Utils/BaybayinTextProcessor.ts";
import { PHONETIC_LETTERS } from "../../phonetic-letters.tsx";
import React from "react";
import ProperNounQuestion from "../Dialog/ProperNounQuestion.tsx";

interface PhoneticData {
  phoneticQuestion: string;
  phoneticAnswer1: string;
  phoneticAnswer2: string;
  phoneticAnswer3?: string;
}

interface TransliteratorProps {
  title: string;
}

type Dictionary = { [word: string]: string };

function getPhoneticData(text: string): PhoneticData {
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

function getNextDialogWord(dictionary: Dictionary): string | undefined {
  return Object.keys(dictionary).find(
    (word) =>
      dictionary[word] === "" && (/ch|qu|c|j/i.test(word) || /[A-Z]/.test(word))
  );
}

export default function TransliteratorOld({ title }: TransliteratorProps) {
  const [text, setText] = useState<string>("");
  const [transliteratedText, setTransliteratedText] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isManuallyClosed, setIsManuallyClosed] = useState(false);
  const [dialogWord, setDialogWord] = useState<string>("");
  const [wordsDictionary, setWordsDictionary] = useState<Dictionary>({});
  const [questionStage, setQuestionStage] = useState<
    "properNoun" | "isPhoneticallySpelled" | "enterPhoneticSpelling"
  >("properNoun");

  useEffect(() => {
    const nextWord = getNextDialogWord(wordsDictionary);

    if (!isDialogOpen) {
      if (!isManuallyClosed && nextWord) {
        setDialogWord(nextWord);
        setIsDialogOpen(true);
        setQuestionStage("properNoun");
      }

      if (isManuallyClosed && !nextWord) {
        setIsManuallyClosed(false);
      }
    }
  }, [isDialogOpen, wordsDictionary, isManuallyClosed]);

  const phoneticData = getPhoneticData(dialogWord);
  const textareaHasText = text.length > 0;
  const isBaybayin = title === "Baybayin";
  const isAurebesh = title === "Aurebesh";
  const isDeseret = title === "Deseret";

  const runAgainstRules = (text: string): string => {
    return isBaybayin ? processBaybayinText(text) : text;
  };

  const handleTransliterate = (): void => {
    const initialDict: Dictionary = text
      .trim()
      .split(/\s+/)
      .reduce((dict: Dictionary, word: string) => {
        dict[word] = "";
        return dict;
      }, {});

    setWordsDictionary(initialDict);

    for (const word of Object.keys(initialDict)) {
      const needsDialog = /ch|qu|c|j/i.test(word) || /[A-Z]/.test(word);

      if (needsDialog) {
        setDialogWord(word);
        setIsDialogOpen(true);
        break;
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

  const handleSkip = (): void => {
    const updatedDict = { ...wordsDictionary };
    updatedDict[dialogWord] = runAgainstRules(dialogWord);

    setWordsDictionary(updatedDict);

    const nextWord = getNextDialogWord(updatedDict);
    if (nextWord) {
      setDialogWord(nextWord);
      setIsDialogOpen(true);
    } else {
      setIsDialogOpen(false);
    }

    const finalOutput = text
      .trim()
      .split(/\s+/)
      .map((word) =>
        updatedDict[word] !== "" ? updatedDict[word] : runAgainstRules(word)
      )
      .join(" ");
    setTransliteratedText(finalOutput);
  };

  const handleCloseDialog = (): void => {
    setIsManuallyClosed(true);
    setIsDialogOpen(false);
  };

  const handleSave = (): void => {
    console.log("save clicked");
  };

  const handleProperNounEntered = (properNounAnswer: string): void => {
    const updatedDict = { ...wordsDictionary };
    updatedDict[dialogWord] = runAgainstRules(properNounAnswer);

    setWordsDictionary(updatedDict);
    setIsDialogOpen(false);

    const nextWord = getNextDialogWord(updatedDict);
    if (nextWord) {
      setDialogWord(nextWord);
      setIsDialogOpen(true);
    }

    const finalOutput = text
      .trim()
      .split(/\s+/)
      .map((word) =>
        updatedDict[word] !== "" ? updatedDict[word] : runAgainstRules(word)
      )
      .join(" ");
    setTransliteratedText(finalOutput);
  };

  const handlePhoneticAnswerSelected = (selectedAnswer: string): void => {
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
    }

    const finalOutput = text
      .trim()
      .split(/\s+/)
      .map((word) =>
        updatedDict[word] !== "" ? updatedDict[word] : runAgainstRules(word)
      )
      .join(" ");
    setTransliteratedText(finalOutput);
  };

  let showDialog: JSX.Element | null = null;
  if (isDialogOpen) {
    if (/[A-Z]/.test(dialogWord)) {
      showDialog = (
        <QuestionDialog
          enteredText={dialogWord}
          close={handleCloseDialog}
          onProperNounEntered={(answer) => {
            handleProperNounEntered(answer);
            setQuestionStage("properNoun");
          }}
          onSkip={handleSkip}
          onPhoneticAnswerSelected={function (): void {
            throw new Error("Function not implemented.");
          }}
          phoneticQuestionChar={""}
          phoneticAnswerChar1={""}
          phoneticAnswerChar2={""}
        />
      );
    }
  } else if (phoneticData) {
    // For CH, QU, etc.
    showDialog = (
      <QuestionDialog
        enteredText={dialogWord}
        close={handleCloseDialog}
        phoneticQuestionChar={phoneticData.phoneticQuestion}
        phoneticAnswerChar1={phoneticData.phoneticAnswer1}
        phoneticAnswerChar2={phoneticData.phoneticAnswer2}
        phoneticAnswerChar3={phoneticData.phoneticAnswer3 ?? null}
        onPhoneticAnswerSelected={handlePhoneticAnswerSelected}
        onSkip={handleSkip}
        onProperNounEntered={function (answer: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
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
      <div>
        <SaveAsButton handleClick={handleSave} />
      </div>
      {showDialog}
    </div>
  );
}
