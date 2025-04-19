import React from "react";

interface SaveAsButtonProps {
  handleClick: () => void;
}

export default function saveAsButton({ handleClick }): SaveAsButtonProps {
  const fileTypes = ["Word", "Text", "Excel"];

  return (
    <>
      <div>
        <button>Download</button>
        <div>
          <a>Word</a>
          <a>Text</a>
          <a>Excel</a>
        </div>
      </div>
    </>
  );
}
