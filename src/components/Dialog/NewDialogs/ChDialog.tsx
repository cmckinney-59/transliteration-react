import React from "react";

interface ChDialogProps {
  word: string;
  onChSelection: (choice: "k" | "tiy") => void;
  onClose: () => void;
  numberOfWordsToReview: number;
}

export default function ChDialog({
  word,
  onChSelection,
  onClose,
  numberOfWordsToReview,
}: ChDialogProps) {
  return (
    <dialog className="dialog-overlay" open>
      <div className="dialog-box">
        <h3>Word Review</h3>
        <p>You have {numberOfWordsToReview} words to review</p>
        <p>
          Does the first "ch" in <strong>{word}</strong> sound like "k" or
          "tiy"?
        </p>
        <button onClick={() => onChSelection("k")}>k</button>
        <button onClick={() => onChSelection("tiy")}>tiy</button>
        <button onClick={onClose}>Close</button>
      </div>
    </dialog>
  );
}
