import React from "react";

interface QuDialogProps {
  word: string | null;
}

export default function QuDialog({ word }: QuDialogProps) {
  return (
    <dialog className="dialog-overlay">
      <div className="dialog-box">
        <h3>Word Review</h3>
        <p>Does the first qu in {word} sound like 'kuw' or 'k'?</p>
        <button>kuw</button>
        <button>k</button>
      </div>
    </dialog>
  );
}
