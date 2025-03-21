import './PageContent.css';

import Transliterator from '../Transliterator/Transliterator';
import Description from '../Description/Description';

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
      <Description
        image={image}
        whatIs={whatIs}
        description={description}
      />
    </div>
  );
}
