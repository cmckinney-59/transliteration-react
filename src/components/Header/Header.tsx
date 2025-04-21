import React, { JSX } from "react";
import logo from "../../assets/images/logo.png";
import "./Header.css";

export default function Header(): JSX.Element {
  return (
    <header className="App-header">
      <div className="header-content">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-Header-Text">The Baybayin Project</h1>
      </div>
    </header>
  );
}
