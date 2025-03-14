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
  const [transliteratedText, setTransliteratedText] = useState("")
  const textareaHasText = text.length > 0;
  let showTransliterator = null;
  let isBaybayin = title === 'Baybayin';
  let isAurebesh = title === 'Aurebesh';
  let isDeseret = title === 'Deseret';

  const handleTransliterate = () => {
    setTransliteratedText(processBaybayinText(text));
  }

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
          <p
            className={`transliteration-output ${
              textareaHasText
              ? (isBaybayin ? "baybayin-font" :
                 isAurebesh ? "aurebesh-font" :
                 isDeseret ? "deseret-font" :
                "")
              : ""
              }`}>
              {transliteratedText || "Transliterated text..."}
          </p>
        </div>
        <p>{transliteratedText}</p>
        <div>
          <TransliterateButton isActive={textareaHasText} onClick={handleTransliterate} />
        </div>
      </div>
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

  function processBaybayinText(text) {
    let processedText = toLowerCaseText(text);
    processedText = replaceShWithSiy(processedText);
    processedText = replacePhWithF(processedText);
    processedText = replaceThWithT(processedText);
    processedText = replaceXWithKs(processedText);
    processedText = capitalizeSubsequentVowels(processedText);
    return processedText;
  }

  function toLowerCaseText(text) {
    return text.toLowerCase();
  }

  function replaceShWithSiy(text) {
    return text.replace(/sh/g, 'siy');
  }

  function replacePhWithF(text) {
    return text.replace(/ph/g, 'f');
  }

  function replaceThWithT(text) {
    return text.replace(/th/g, 't');
  }

  function replaceXWithKs(text) {
    return text.replace(/x/g, 'ks');
  }

  function capitalizeSubsequentVowels(text) {
    const vowelRegex = /([aeiou])([aeiou]+)/gi;
    return text.replace(vowelRegex, (firstVowel, subsequentVowels) => {
      return firstVowel + subsequentVowels.toUpperCase();
    });
  }
}
