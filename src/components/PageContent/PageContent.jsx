import './PageContent.css';

import Transliterator from '../Transliterator/Transliterator';
import Description from '../Description/Description';
import {PAGES} from '../../pages.jsx'

export default function PageContent({
  selectedPage
}) {
  const pageData = PAGES[selectedPage] || {};
  const { title, image, whatIs, description } = pageData;

  return (
    <div>
      { title && title !== 'Home' && <Transliterator title={title}/> }
      <Description  image={image} whatIs={whatIs} description={description} />
    </div>
  );
}
