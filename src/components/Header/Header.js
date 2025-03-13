import logo from '../../assets/images/logo.png';
import './Header.css';

export default function Header() {
  return (  
    <header className="App-header">
      <h1>The Baybayin Project</h1>
      <img src={logo} className="App-logo" alt="logo" />
      {/* <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
    </header>
  )
}