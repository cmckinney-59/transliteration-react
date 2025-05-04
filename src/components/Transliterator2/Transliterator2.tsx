import { useState, JSX } from "react";
import "./Transliterator2.css";

import TransliterateButton from "../Buttons/TransliterateButton.tsx";
import React from "react";
import StartReviewDialog from "../Dialog/NewDialogs/StartReviewDialog.tsx";
import CapitalLetterDialog from "../Dialog/NewDialogs/CapitalLetterDialog.tsx";
import CDialog from "../Dialog/NewDialogs/CDialog.tsx";
import ChDialog from "../Dialog/NewDialogs/ChDialog.tsx";
import JDialog from "../Dialog/NewDialogs/JDialog.tsx";
import QuDialog from "../Dialog/NewDialogs/QuDialog.tsx";

interface TransliteratorProps {
  title: string;
}

type Dictionary = { [word: string]: string };

export default function Transliterator({ title }: TransliteratorProps) {
  const [text, setText] = useState<string>("");
  const [wordForDialog, setWordForDialog] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [hasCapitalLetter, setHasCapitalLetter] = useState<boolean>(false);
  const [hasCh, setHasCh] = useState<boolean>(false);
  const [hasC, setHasC] = useState<boolean>(false);
  const [hasJ, setHasJ] = useState<boolean>(false);
  const [hasQu, setHasQu] = useState<boolean>(false);
  const [wordsDictionary, setWordsDictionary] = useState<Dictionary>({});

  const textareaHasText = text.length > 0;

  // Handle Clicks

  const handleTransliterateButtonClick = (): void => {
    setIsDialogOpen(true);
  };

  const handleStartButtonClick = (): void => {
    handleTransliterate();
  };

  // Show Dialogs

  let showDialog: JSX.Element | null = null;
  if (isDialogOpen) {
    showDialog = <StartReviewDialog onClickStart={handleStartButtonClick} />;
  }

  if (hasCapitalLetter) {
    showDialog = <CapitalLetterDialog word={wordForDialog} />;
  }

  if (hasCh) {
    showDialog = <ChDialog word={wordForDialog} />;
  }

  if (hasC) {
    showDialog = <CDialog word={wordForDialog} />;
  }

  if (hasJ) {
    showDialog = <JDialog word={wordForDialog} />;
  }

  if (hasQu) {
    showDialog = <QuDialog word={wordForDialog} />;
  }

  // Handle Methods

  const handleTransliterate = (): void => {
    const initialDict = initializeDictionary(text);
    const updatedDict: Dictionary = {};

    Object.keys(initialDict).forEach((word) => {
      let transformed = word;

      while (/ch|c|j|qu|[A-Z]/.test(transformed)) {
        while (/[A-Z]/.test(transformed)) {
          setWordForDialog(transformed);
          setHasCapitalLetter(true);
          transformed = transformed.toLowerCase();
          console.log({ transformed });
        }

        while (/ch/.test(transformed)) {
          setWordForDialog(transformed);
          setHasCh(true);
          transformed = transformed.replace("ch", "tiy");
          console.log({ transformed });
        }

        while (/c/.test(transformed)) {
          setWordForDialog(transformed);
          setHasC(true);
          transformed = transformed.replace("c", "k");
          console.log({ transformed });
        }

        while (/j/.test(transformed)) {
          setWordForDialog(transformed);
          setHasJ(true);
          transformed = transformed.replace("j", "h");
          console.log({ transformed });
        }

        while (/qu/.test(transformed)) {
          setWordForDialog(transformed);
          setHasQu(true);
          transformed = transformed.replace("qu", "k");
          console.log({ transformed });
        }
      }

      updatedDict[word] = transformed;
    });

    setWordsDictionary(updatedDict);
  };

  // Helper methods

  const initializeDictionary = (inputText: string): Dictionary => {
    return inputText
      .trim()
      .split(/\s+/)
      .reduce((dict: Dictionary, word: string) => {
        dict[word] = "";
        return dict;
      }, {});
  };

  // Main HTML Body

  return (
    <div>
      <h2>{title} Transliterator 2</h2>
      <div className="transliteration-container">
        <textarea
          className="transliteration-textarea"
          placeholder="Enter text to be transliterated here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div>
        <TransliterateButton
          isActive={textareaHasText}
          text={text}
          onClick={handleTransliterateButtonClick}
        />
      </div>
      {showDialog}
    </div>
  );
}
