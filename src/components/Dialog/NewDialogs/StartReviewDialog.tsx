import React from "react";

interface StartReviewDialogProps {
  onClickStart: () => void;
  onClose: () => void;
  numberOfWordsToReview: number;
}

export default function StartReviewDialog({
  onClickStart,
  onClose,
  numberOfWordsToReview,
}: StartReviewDialogProps) {
  return (
    <dialog className="dialog-overlay">
      <div className="dialog-box">
        <h3>Word Review</h3>
        <p>You have {numberOfWordsToReview} words to review</p>
        <button onClick={onClickStart}>Start</button>
        <button onClick={onClose}>Close</button>
      </div>
    </dialog>
  );
}
