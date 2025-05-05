import React from "react";

interface CDialogProps {
  word: string;
  onCSelection: (choice: "k" | "s" | "tiy") => void;
}

export default function CDialog({ word, onCSelection }: CDialogProps) {
  return (
    <dialog className="dialog-overlay" open>
      <div className="dialog-box">
        <h3>Word Review</h3>
        <p>
          Does the first "c" in <strong>{word}</strong> sound like "k", "s"
          "tiy"?
        </p>
        <button onClick={() => onCSelection("k")}>k</button>
        <button onClick={() => onCSelection("s")}>s</button>
        <button onClick={() => onCSelection("tiy")}>tiy</button>
      </div>
    </dialog>
  );
}
