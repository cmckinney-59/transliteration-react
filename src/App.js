import './App.css';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.js'
import Description from './components/Description.js'
import Transliterator from './components/Transliterator.js'
import CoreConcept from './components/CoreConcepts.js';

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
