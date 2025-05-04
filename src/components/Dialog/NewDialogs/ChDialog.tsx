import React from "react";

interface ChDialogProps {
  word: string | null;
}

export default function ChDialog({ word }: ChDialogProps) {
  return (
    <dialog className="dialog-overlay">
      <div className="dialog-box">
        <h3>Word Review</h3>
        <p>Does the first ch in {word} sound like 'k' or 'tiy'?</p>
        <button>k</button>
        <button>tiy</button>
      </div>
    </dialog>
  );
}
