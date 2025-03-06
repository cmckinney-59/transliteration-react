import logo from './assets/logo.png';
import './App.css';

const transliterationAlphabets = ['Baybayin', 'Aurebesh', 'Deseret']
let currentAlphabet = 0;

function Header() {
  const alphabet = transliterationAlphabets[currentAlphabet];

  return (  
    <header className="App-header">
      <h1>The Baybayin Project</h1>
      <h2>{alphabet}</h2>
      <p>{alphabet} Transliterator</p>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  )
}

function DescriptionSection(props) {
  const alphabet = transliterationAlphabets[currentAlphabet];

  return (
    <li>
      <img src={props.image} alt="..." />
      <h3>TITLE</h3>
      <p>DESCRIPTION</p>
      <p>WHAT IS {alphabet}?</p>
      <p>{alphabet} TRANSLITERATOR</p>
    </li>
  )
}

function DescriptionSection1(props) {
  const alphabet = transliterationAlphabets[currentAlphabet];

  return (
    <li>
      <img src={props.image} alt="..." />
      <h3>TITLE</h3>
      <p>DESCRIPTION</p>
      <p>WHAT IS {alphabet}?</p>
      <p>{alphabet} TRANSLITERATOR</p>
    </li>
  )
}

function App() {
  return (
    <div className="App">
      <main>
        <Header/>
        <DescriptionSection/>
      </main>
    </div>
  );
}

export default App;
