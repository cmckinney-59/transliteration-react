import { useState } from 'react';
import './PageContent.css';
import TransliterateButton from '../Buttons/TransliterateButton';

export default function PageContent({
  image,
  title,
  description,
  whatIs,
  transliterator
}) {
  const [text, setText] = useState("");
  const textareaHasText = text.length > 0;
  let showTransliterator = null;
  let isBaybayin = title === 'Baybayin';
  let isAurebesh = title === 'Aurebesh';
  let isDeseret = title === 'Deseret';

  if (title !== 'Home') {
    showTransliterator = (
      <div>
        <h2>{transliterator}</h2>
        <div className="transliteration-container">
          <textarea
            className="transliteration-textarea"
            placeholder="Enter text to be transliterated here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
            <p className="transliteration-output">
              {text}
            </p>
        </div>
        <div>
          <TransliterateButton isActive={textareaHasText} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h2>{whatIs}</h2>
        <p>{description}</p>
      </div>
      {showTransliterator}
    </div>
  );
}
