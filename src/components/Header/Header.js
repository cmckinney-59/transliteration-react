import logo from '../../assets/logo.png';
import './Header.css';

const transliterationAlphabets = ['Baybayin', 'Aurebesh', 'Deseret']
let currentAlphabet = 0;
const alphabet = transliterationAlphabets[currentAlphabet];

export default function Header() {
  return (  
    <header className="App-header">
      <h1>The Baybayin Project</h1>
      <h2>{alphabet}</h2>
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