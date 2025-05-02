import { useState, JSX } from "react";
import "./Transliterator2.css";

import TransliterateButton from "../Buttons/TransliterateButton.tsx";
import React from "react";
import StartReviewDialog from "../Dialog/StartReviewDialog.tsx";

interface TransliteratorProps {
  title: string;
}

type Dictionary = { [word: string]: string };

export default function Transliterator({ title }: TransliteratorProps) {
  const [text, setText] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [wordsDictionary, setWordsDictionary] = useState<Dictionary>({});

  const textareaHasText = text.length > 0;

  let showDialog: JSX.Element | null = null;
  if (isDialogOpen) {
    showDialog = <StartReviewDialog />;
  }

  const handleTransliterateButtonClick = (): void => {
    setIsDialogOpen(true);
    handleTransliterate();
  };

  const handleTransliterate = (): void => {
    const initialDict = initializeDictionary(text);
    const updatedDict: Dictionary = {};

    Object.keys(initialDict).forEach((word) => {
      let transformed = word;

      // Continue replacing one 'c' at a time until none are left
      while (transformed.includes("c")) {
        transformed = transformed.replace("c", "k");
        console.log({ transformed });
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
