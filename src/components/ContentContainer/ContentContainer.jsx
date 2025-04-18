import { useState } from 'react';

import './ContentContainer.css';
import PageContent from '../PageContent/PageContent.jsx';
import AlphabetPicker from '../AlphabetPicker/AlphabetPicker.jsx';

export default function ContentContainer() {
  const [ selectedPage, setSelectedPage ] = useState('Home')

  function handleClick(event) {
    setSelectedPage (event.target.value);
  }

  return (
    <section>
      <div>
        <AlphabetPicker selectedPage={selectedPage} handleClick={handleClick}/>
      </div>
      <div className='page-content'>
        <PageContent selectedPage={selectedPage}/>
      </div>
    </section>
  );
}
