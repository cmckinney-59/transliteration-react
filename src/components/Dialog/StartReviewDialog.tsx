import React from "react";

export default function StartReviewDialog() {
  return (
    <dialog className="dialog-overlay">
      <div className="dialog-box">
        <h3>Word Review</h3>
        <p>You have x amount of words to revied</p>
        <button>Start</button>
        <button>Close</button>
      </div>
    </dialog>
  );
}
