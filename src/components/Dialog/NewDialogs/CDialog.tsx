import React from "react";

interface CDialogProps {
  word: string;
  onCSelection: (choice: "k" | "s" | "tiy") => void;
  onClose: () => void;
  numberOfWordsToReview: number;
  currentWordIndex: number;
}

export default function CDialog({
  word,
  onCSelection,
  onClose,
  numberOfWordsToReview,
  currentWordIndex,
}: CDialogProps) {
  return (
    <dialog className="dialog-overlay" open>
      <div className="dialog-box">
        <h3>Word Review</h3>
        <p>
          Reviewing word {currentWordIndex + 1} of {numberOfWordsToReview}
        </p>
        <p>
          Does the first "c" in <strong>{word}</strong> sound like "k", "s"
          "tiy"?
        </p>
        <button onClick={() => onCSelection("k")}>k</button>
        <button onClick={() => onCSelection("s")}>s</button>
        <button onClick={() => onCSelection("tiy")}>tiy</button>
        <button onClick={onClose}>Close</button>
      </div>
    </dialog>
  );
}
