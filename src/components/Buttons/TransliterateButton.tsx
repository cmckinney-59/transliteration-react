import React from "react";

interface TransliterateButtonProps {
  onClick: () => void;
  isActive: boolean;
  text: string | null;
}

export default function TransliterateButton({
  onClick,
  isActive,
  text,
}: TransliterateButtonProps) {
  return (
    <button
      className={isActive ? "active" : undefined}
      onClick={onClick}
      disabled={text === null}
    >
      Transliterate
    </button>
  );
}
