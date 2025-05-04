import React from "react";

export default function QuDialog() {
  return (
    <dialog className="dialog-overlay">
      <div className="dialog-box">
        <h3>Word Review</h3>
        <p>Does the first qu in word sound like 'kuw' or 'k'?</p>
        <button>kuw</button>
        <button>k</button>
      </div>
    </dialog>
  );
}
