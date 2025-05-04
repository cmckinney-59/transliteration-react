import React from "react";

interface CDialogProps {
  word: string | null;
}

export default function CDialog({ word }: CDialogProps) {
  return (
    <dialog className="dialog-overlay">
      <div className="dialog-box">
        <h3>Word Review</h3>
        <p>Does the first c in {word} sound like 'k', 's', or 'tiy'</p>
        <button>k</button>
        <button>s</button>
        <button>tiy</button>
      </div>
    </dialog>
  );
}
