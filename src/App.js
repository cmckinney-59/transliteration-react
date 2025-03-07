import logo from './assets/logo.png';
import componentsImg from './assets/logo.png';
import './App.css';
import { CORE_CONCEPTS } from './data.js';

const transliterationAlphabets = ['Baybayin', 'Aurebesh', 'Deseret']
let currentAlphabet = 0;
const alphabet = transliterationAlphabets[currentAlphabet];

function Header() {
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

function CoreConcept(image, title, description) {
  return(
    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Description/>
        <Transliterator/>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          <CoreConcept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
