import './PageContent.css';

import Transliterator from '../Transliterator/Transliterator';
import Description from '../Description/Description';

export default function PageContent({
  image,
  title,
  description,
  whatIs,
}) {

  return (
    <div>
      { title !== 'Home' && <Transliterator title={title}/> }
      <Description
        image={image}
        whatIs={whatIs}
        description={description}
      />
    </div>
  );
}
