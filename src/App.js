import logo from './logo.png';
import './App.css';

const transliterationAlphabets = ['Baybayin', 'Aurebesh', 'Deseret']

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const alphabet = transliterationAlphabets[getRandomInt(2)]

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
