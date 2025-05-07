import React from "react";

interface JDialogProps {
  word: string;
  onJSelection: (choice: "h" | "diy") => void;
  onClose: () => void;
  numberOfWordsToReview: number;
}

export default function JDialog({
  word,
  onJSelection,
  onClose,
  numberOfWordsToReview,
}: JDialogProps) {
  return (
    <dialog className="dialog-overlay" open>
      <div className="dialog-box">
        <h3>Word Review</h3>
        <p>You have {numberOfWordsToReview} words to review</p>
        <p>
          Does the first "j" in <strong>{word}</strong> sound like "h" or "diy"?
        </p>
        <button onClick={() => onJSelection("h")}>h</button>
        <button onClick={() => onJSelection("diy")}>diy</button>
        <button onClick={onClose}>Close</button>
      </div>
    </dialog>
  );
}
