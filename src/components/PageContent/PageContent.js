import { useState } from 'react'; // Import useState
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
  let showTransliterator = '';

  if (title !== 'Home') {
    showTransliterator = (
      <div>
      <h2>{transliterator}</h2>
      <textarea
        className="transliteration-textarea"
        placeholder="Enter text to be transliterated here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div>
        <TransliterateButton isActive={textareaHasText} />
      </div>
      <p className="transliteration-output">output</p>
    </div>
    )
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
