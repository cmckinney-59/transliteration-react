import "./AlphabetPicker.css";
import React from "react";

interface AlphabetPickerProps {
  selectedPage: string;
  handleClick: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function AlphabetPicker({
  selectedPage,
  handleClick,
}: AlphabetPickerProps) {
  const alphabets = ["Baybayin", "Aurebesh", "Deseret"];

  return (
    <section>
      <label htmlFor="options">Choose an alphabet: </label>
      <select id="options" value={selectedPage} onChange={handleClick}>
        <option value=""></option>
        {alphabets.map((alphabet) => (
          <option key={alphabet} value={alphabet}>
            {alphabet}
          </option>
        ))}
      </select>
    </section>
  );
}
