import logo from './assets/logo.png';
import './App.css';

const transliterationAlphabets = ['Baybayin', 'Aurebesh', 'Deseret']
let currentAlphabet = 1;

function Header() {
  const alphabet = transliterationAlphabets[currentAlphabet];

  return (  
    <header className="App-header">
      <h1>The Baybayin Project</h1>
      <h2>What is {alphabet}</h2>
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

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <h2> What is Baybayin? </h2>
      </main>
    </div>
  );
}

export default App;
