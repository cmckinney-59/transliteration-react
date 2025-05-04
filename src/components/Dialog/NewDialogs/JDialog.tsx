import React from "react";

export default function JDialog() {
  return (
    <dialog className="dialog-overlay">
      <div className="dialog-box">
        <h3>Word Review</h3>
        <p>Does the first j in word sound like 'diy' or 'h'?</p>
        <button>diy</button>
        <button>h</button>
      </div>
    </dialog>
  );
}
