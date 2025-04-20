import React from "react";

interface DialogNavButtonsProps {
  close: () => void;
  onSkip: () => void;
}

export default function DialogNavButtons({
  close,
  onSkip,
}: DialogNavButtonsProps) {
  return (
    <div className="dialog-nav-buttons">
      <button onClick={onSkip}>Skip</button>
      <button onClick={close}>Close</button>
    </div>
  );
}
