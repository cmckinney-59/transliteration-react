import React, { useState } from "react";

interface CapitalLetterDialogProps {
  originalText: string;
  onEnter: (replacement: string) => void;
  onClose: () => void;
  onSkip: () => void;
  numberOfWordsToReview: number;
  currentWordIndex: number;
}

export default function CapitalLetterDialog({
  originalText,
  onEnter,
  onClose,
  onSkip,
  numberOfWordsToReview,
  currentWordIndex,
}: CapitalLetterDialogProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleEnterClick = () => {
    onEnter(inputValue);
  };

  return (
    <dialog className="dialog-overlay">
      <div className="dialog-box">
        <h3>Word Review</h3>
        <p>
          Reviewing word {currentWordIndex + 1} of {numberOfWordsToReview}
        </p>
        <p>
          If <strong>{originalText}</strong> is a proper noun <em>and</em> is
          not spelled the way it sounds, please provide the phonetic spelling
          below.
        </p>
        <p>Otherwise, click "Skip".</p>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleEnterClick}>Enter</button>
        <button onClick={onSkip}>Skip</button>
        <button onClick={onClose}>Close</button>
      </div>
    </dialog>
  );
}
