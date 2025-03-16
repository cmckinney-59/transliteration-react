import { useState } from 'react';

import './ContentContainer.css';
import {PAGES} from '../../pages.jsx'
import PageContent from '../PageContent/PageContent.jsx';
import LeftTabButton from '../Buttons/LeftTabButton.jsx';

export default function ContentContainer() {
  const [ selectedPage, setSelectedPage ] = useState('Home')

  function handleClick(selectedPage) {
    setSelectedPage (selectedPage);
  }

  return (
    <section>
      <h1>{selectedPage}</h1>
      <menu className='sidebar'>
        <LeftTabButton onClick={() => handleClick('Home')}>Home</LeftTabButton>
        <LeftTabButton onClick={() => handleClick('Baybayin')}>Baybayin</LeftTabButton>
        <LeftTabButton onClick={() => handleClick('Aurebesh')}>Aurebesh</LeftTabButton>
        <LeftTabButton onClick={() => handleClick('Deseret')}>Deseret</LeftTabButton>
      </menu>
      <div className='page-content'>
        <PageContent {...PAGES[selectedPage]}/>
      </div>
    </section>
  );
}
