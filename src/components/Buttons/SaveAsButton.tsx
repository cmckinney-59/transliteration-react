import React from "react";

interface SaveAsButtonProps {
  handleClick: () => void;
}

export default function SaveAsButton({ handleClick }): SaveAsButtonProps {
  const fileTypes = ["Word", "Text", "Excel"];

  return (
    <>
      <div>
        <button onClick={handleClick}>Download</button>
        <div>
          <a>Word</a>
          <a>Text</a>
          <a>Excel</a>
        </div>
      </div>
    </>
  );
}
