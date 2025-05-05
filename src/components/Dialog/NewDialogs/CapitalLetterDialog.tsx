import React, { useState } from "react";

interface CapitalLetterDialogProps {
  originalText: string;
  onEnter: (replacement: string) => void;
}

export default function CapitalLetterDialog({
  originalText,
  onEnter,
}: CapitalLetterDialogProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleEnterClick = () => {
    onEnter(inputValue);
  };

  return (
    <dialog className="dialog-overlay">
      <div className="dialog-box">
        <h3>Word Review</h3>
        <p>
          If <strong>{originalText}</strong> is a proper noun AND is not spelled
          the way that it sounds please spell it below.
        </p>
        <p>If not click skip.</p>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleEnterClick}>Enter</button>
        <button>Skip</button>
      </div>
    </dialog>
  );
}
