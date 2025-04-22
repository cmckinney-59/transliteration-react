import React, { JSX } from "react";
import "./App.css";

import Header from "./components/Header/Header.tsx";
import ContentContainer from "./components/ContentContainer/ContentContainer.tsx";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <ContentContainer />
      </main>
    </>
  );
}

export default App;
