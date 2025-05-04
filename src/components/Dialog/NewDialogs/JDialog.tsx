import React from "react";

interface JDialogProps {
  word: string | null;
}

export default function JDialog({ word }: JDialogProps) {
  return (
    <dialog className="dialog-overlay">
      <div className="dialog-box">
        <h3>Word Review</h3>
        <p>Does the first j in {word} sound like 'diy' or 'h'?</p>
        <button>diy</button>
        <button>h</button>
      </div>
    </dialog>
  );
}
