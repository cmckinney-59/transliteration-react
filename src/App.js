import './App.css';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.js'
import Description from './components/Description/Description.js'
import Transliterator from './components/Transliterator/Transliterator.js'
import CoreConcept from './components/CoreConcepts/CoreConcepts.js';
import LeftTabButton from './components/LeftTabButton.js';
import { useState } from 'react';

function App() {
  const [ selectedButton, setSelectedButton ] = useState('home')

  function handleClick(selectedButton) {
    setSelectedButton (selectedButton);
    console.log(selectedButton);
  }

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
        <section class='examples'>
          <h2>Examples</h2>
          <menu>
            <LeftTabButton onClick={() => handleClick('home')}>Home</LeftTabButton>
            <LeftTabButton onClick={() => handleClick('baybayin')}>Baybayin</LeftTabButton>
            <LeftTabButton onClick={() => handleClick('aurebesh')}>Aurebesh</LeftTabButton>
            <LeftTabButton onClick={() => handleClick('deseret')}>Deseret</LeftTabButton>
          </menu>
          <div id='tab-content'>
            <h3></h3>
            <p></p>
            <pre>
              <code>
                
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
