import { useState } from 'react';

import './ContentContainer.css';
import {PAGES} from '../../pages.jsx'
import PageContent from '../PageContent/PageContent.jsx';

export default function ContentContainer() {
  const [ selectedPage, setSelectedPage ] = useState('Home')

  function handleClick(event) {
    setSelectedPage (event.target.value);
  }

  return (
    <section>
      <div>
        <label htmlFor="options">Choose an alphabet: </label>
        <select id="options" value={selectedPage} onChange={handleClick}>
          <option value="">Select...</option>
          <option value="Baybayin">Baybayin</option>
          <option value="Aurebesh">Aurebesh</option>
          <option value="Deseret">Deseret</option>
        </select>
      </div>
      <div className='page-content'>
        <PageContent {...PAGES[selectedPage]}/>
      </div>
    </section>
  );
}
