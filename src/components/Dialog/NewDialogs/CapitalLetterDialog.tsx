import React from "react";

interface CapitalLetterDialogProps {
  word: string | null;
}

export default function CapitalLetterDialog({
  word,
}: CapitalLetterDialogProps) {
  return (
    <dialog className="dialog-overlay">
      <div className="dialog-box">
        <h3>Word Review</h3>
        <p>
          If {word} is a proper noun AND is not spelled the way that it sounds
          please spell it below.
        </p>
        <p>If not click next.</p>
        <button>Input box</button>
        <button>Next</button>
      </div>
    </dialog>
  );
}
