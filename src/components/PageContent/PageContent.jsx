import './PageContent.css';

import Transliterator from '../Transliterator/Transliterator';

export default function PageContent({
  image,
  title,
  description,
  whatIs,
  transHeader
}) {

  let showTransliterator = null;

  if (title !== 'Home') {
    showTransliterator = (
      <Transliterator
        transHeader={transHeader}
        title={title}
      />
    );
  }

  return (
    <div>
      {showTransliterator}
      <div>
        <h2>{whatIs}</h2>
        <img src={image} alt={title} />
        <p>{description}</p>
      </div>
    </div>
  );
}
