import React from "react";

export default function CDialog() {
  return (
    <dialog className="dialog-overlay">
      <div className="dialog-box">
        <h3>Word Review</h3>
        <p>Does the first c in word sound like 'k', 's', or 'tiy'</p>
        <button>k</button>
        <button>s</button>
        <button>tiy</button>
      </div>
    </dialog>
  );
}
