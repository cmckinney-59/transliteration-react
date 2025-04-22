import React, { useState, ChangeEvent } from "react";

import "./ContentContainer.css";
import PageContent from "../PageContent/PageContent.tsx";
import AlphabetPicker from "../AlphabetPicker/AlphabetPicker.tsx";

export default function ContentContainer() {
  const [selectedPage, setSelectedPage] = useState<string>("Home");

  function handleClick(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedPage(event.target.value);
  }

  return (
    <section>
      <div>
        <AlphabetPicker selectedPage={selectedPage} handleClick={handleClick} />
      </div>
      <div className="page-content">
        <PageContent selectedPage={selectedPage} />
      </div>
    </section>
  );
}
