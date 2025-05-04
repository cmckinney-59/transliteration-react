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
  const [wordsDictionary, setWordsDictionary] = useState<Dictionary>({});

  type DialogType = "start" | "capital" | "ch" | "c" | "j" | "qu" | null;
  const [activeDialog, setActiveDialog] = useState<DialogType>(null);

  // New State Variables

  const [wordKeys, setWordKeys] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [chIndex, setChIndex] = useState<number | null>(null);

  const textareaHasText = text.length > 0;

  React.useEffect(() => {
    if (currentWord) {
      processWord(currentWord);
    }
  }, [currentWord]);

  // Handle Clicks

  const handleTransliterateButtonClick = (): void => {
    setIsDialogOpen(true);
    setActiveDialog("start");
  };

  const handleStartButtonClick = (): void => {
    const initialDict = initializeDictionary(text);
    setWordsDictionary(initialDict);
    const keys = Object.keys(initialDict);
    setWordKeys(keys);
    setCurrentWordIndex(0);
    setCurrentWord(keys[0]); // Start with first word
    processWord(keys[0]); // Start processing
  };

  const processWord = (word: string): void => {
    if (/[A-Z]/.test(word)) {
      setWordForDialog(word);
      setActiveDialog("capital");
      return;
    }

    if (/ch/.test(word)) {
      const match = word.indexOf("ch");
      if (match !== -1) {
        setChIndex(match);
        setWordForDialog(word);
        setActiveDialog("ch");
        return;
      }
    }

    if (/c/.test(word)) {
      setWordForDialog(word);
      setActiveDialog("c");
      return;
    }

    if (/j/.test(word)) {
      setWordForDialog(word);
      setActiveDialog("j");
      return;
    }

    if (/qu/.test(word)) {
      setWordForDialog(word);
      setActiveDialog("qu");
      return;
    }

    // No more transformations, store and move to next
    const original = wordKeys[currentWordIndex];
    setWordsDictionary((prev) => ({
      ...prev,
      [original]: word,
    }));

    const nextIndex = currentWordIndex + 1;
    if (nextIndex < wordKeys.length) {
      const nextWord = wordKeys[nextIndex];
      setCurrentWordIndex(nextIndex);
      setCurrentWord(nextWord); // ✅ This will be picked up by useEffect
    } else {
      setIsDialogOpen(false);
    }
  };

  // In Transliterator component
  const handleChSelection = (choice: string) => {
    if (chIndex === null) return;

    const replacement = choice === "k" ? "k" : "tiy";

    const before = currentWord.slice(0, chIndex);
    const after = currentWord.slice(chIndex + 2);
    const updatedWord = before + replacement + after;

    const originalWord = wordKeys[currentWordIndex];

    setWordsDictionary((prev) => ({
      ...prev,
      [originalWord]: updatedWord,
    }));

    setChIndex(null);
    setActiveDialog(null);

    if (updatedWord.includes("ch")) {
      setCurrentWord(updatedWord); // continue processing same original word
    } else {
      const nextIndex = currentWordIndex + 1;
      if (nextIndex < wordKeys.length) {
        const nextWord = wordKeys[nextIndex];
        setCurrentWordIndex(nextIndex);
        setCurrentWord(nextWord);
      } else {
        setIsDialogOpen(false);
      }
    }
  };

  // Show Dialogs

  let showDialog: JSX.Element | null = null;

  switch (activeDialog) {
    case "start":
      showDialog = <StartReviewDialog onClickStart={handleStartButtonClick} />;
      break;

    case "capital":
      showDialog = <CapitalLetterDialog word={wordForDialog} />;
      break;

    case "ch":
      showDialog = (
        <ChDialog word={wordForDialog} onChSelection={handleChSelection} />
      );
      break;

    case "c":
      showDialog = <CDialog word={wordForDialog} />;
      break;

    case "j":
      showDialog = <JDialog word={wordForDialog} />;
      break;

    case "qu":
      showDialog = <QuDialog word={wordForDialog} />;
      break;
  }

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
      <div className="dictionary-output">
        <h3>Processed Words:</h3>
        <ul>
          {Object.entries(wordsDictionary).map(([original, processed]) => (
            <li key={original}>
              <strong>{original}</strong>: {processed}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
