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
    // Convert text to dictionary
    const initialDict: Dictionary = text
      .trim()
      .split(/\s+/)
      .reduce((dict: Dictionary, word: string) => {
        dict[word] = "";
        return dict;
      }, {});

    setWordsDictionary(initialDict);

    console.log(initialDict);
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
