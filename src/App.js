import './App.css';
// import { CORE_CONCEPTS } from './data.js';
import {PAGES} from './pages.js'
import Header from './components/Header/Header.js'
// import Description from './components/Description/Description.js'
// import Transliterator from './components/Transliterator/Transliterator.js'
// import CoreConcept from './components/CoreConcepts/CoreConcepts.js';
import PageContent from './components/PageContent/PageContent.js';
import LeftTabButton from './components/LeftTabButton.js';
import { useState } from 'react';

function App() {
  const [ selectedPage, setSelectedPage ] = useState('')

  function handleClick(selectedPage) {
    setSelectedPage (selectedPage);
    console.log(selectedPage);
  }

  let pageContent = <p>no page selected</p>;

  if (selectedPage) {
    pageContent = (
      <PageContent {...PAGES[selectedPage]}/>
    )
  }

  return (
    <div className="App">
      <Header/>
      <main>
        {/* <Description/>
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
        </section> */}
        <section>
          <h1>{selectedPage}</h1>
          <menu className='sidebar'>
            <LeftTabButton onClick={() => handleClick('Home')}>Home</LeftTabButton>
            <LeftTabButton onClick={() => handleClick('Baybayin')}>Baybayin</LeftTabButton>
            <LeftTabButton onClick={() => handleClick('Aurebesh')}>Aurebesh</LeftTabButton>
            <LeftTabButton onClick={() => handleClick('Deseret')}>Deseret</LeftTabButton>
          </menu>
          <div id='tab-content'>
            {pageContent}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
