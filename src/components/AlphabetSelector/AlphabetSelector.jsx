import { useState } from 'react';
import LeftTabButton from '../../components/Buttons/LeftTabButton.jsx';
// import {PAGES} from './pages.jsx';

export default function PageContent() {
    const [ selectedPage, setSelectedPage ] = useState('')
    
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
        <div id='page-content'>
            {pageContent}
        </div>
        </section>
    )
}