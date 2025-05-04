import React from "react";

export default function CapitalLetterDialog() {
  return (
    <dialog className="dialog-overlay">
      <div className="dialog-box">
        <h3>Word Review</h3>
        <p>If word is a proper noun please spell it below.</p>
        <p>If not click next.</p>
        <button>Input box</button>
        <button>Next</button>
      </div>
    </dialog>
  );
}
