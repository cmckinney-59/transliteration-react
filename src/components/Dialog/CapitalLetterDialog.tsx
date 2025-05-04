import React from "react";

export default function StartReviewDialog() {
  return (
    <dialog className="dialog-overlay">
      <div className="dialog-box">
        <h3>Word Review</h3>
        <p>This has a capital letter</p>
        <button>Yes</button>
        <button>No</button>
      </div>
    </dialog>
  );
}
