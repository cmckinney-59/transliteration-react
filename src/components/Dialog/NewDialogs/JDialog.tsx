import React from "react";

interface JDialogProps {
  word: string;
  onJSelection: (choice: "h" | "diy") => void;
}

export default function JDialog({ word, onJSelection }: JDialogProps) {
  return (
    <dialog className="dialog-overlay" open>
      <div className="dialog-box">
        <h3>Word Review</h3>
        <p>
          Does the first "j" in <strong>{word}</strong> sound like "h" or "diy"?
        </p>
        <button onClick={() => onJSelection("h")}>h</button>
        <button onClick={() => onJSelection("diy")}>diy</button>
      </div>
    </dialog>
  );
}
