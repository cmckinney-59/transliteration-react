import React from "react";

interface QuDialogProps {
  word: string;
  onQuSelection: (choice: "k" | "kuw") => void;
}

export default function QuDialog({ word, onQuSelection }: QuDialogProps) {
  return (
    <dialog className="dialog-overlay" open>
      <div className="dialog-box">
        <h3>Word Review</h3>
        <p>
          Does the first "qu" in <strong>{word}</strong> sound like "k" or
          "kuw"?
        </p>
        <button onClick={() => onQuSelection("k")}>k</button>
        <button onClick={() => onQuSelection("kuw")}>kuw</button>
      </div>
    </dialog>
  );
}
