import React, { JSX } from "react";
import "./App.css";

import Header from "./components/Header/Header.jsx";
import ContentContainer from "./components/ContentContainer/ContentContainer.jsx";

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
