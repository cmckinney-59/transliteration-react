import './App.css';
import {PAGES} from './pages.jsx'
import Header from './components/Header/Header.jsx'
// import Description from './components/Description/Description.jsx'
// import Transliterator from './components/Transliterator/Transliterator.jsx'
import PageContent from './components/PageContent/PageContent.jsx';
import LeftTabButton from './components/Buttons/LeftTabButton.jsx';
import { useState } from 'react';

function App() {
  const [ selectedPage, setSelectedPage ] = useState('')

  function handleClick(selectedPage) {
    setSelectedPage (selectedPage);
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
        <Transliterator/> */}
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
