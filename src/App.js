import logo from './assets/logo.png';
import './App.css';

const transliterationAlphabets = ['Baybayin', 'Aurebesh', 'Deseret']
let currentAlphabet = 0;
const alphabet = transliterationAlphabets[currentAlphabet];

function Header() {
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

function Description() {
  return (
    <div>
      <h2>What is {alphabet}?</h2>
      <p>This is the {alphabet} description</p>
    </div>
  )
}

function Transliterator() {
  return (
    <div>
      <h2>{alphabet} Transliterator</h2>
      <p>This is the {alphabet} Transliterator</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <main>
        <Header/>
        <Description/>
        <Transliterator/>
      </main>
    </div>
  );
}

export default App;
