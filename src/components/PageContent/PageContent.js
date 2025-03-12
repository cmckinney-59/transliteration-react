import './PageContent.css';
import TransliterateButton from '../Buttons/TransliterateButton'

export default function PageContent({
  image,
  title,
  description,
  whatIs,
  transliterator,
  isActive
  }) {
  return(
    <div>
      <img src={image} alt={title}/>
      <div>
        <h2>{whatIs}</h2>
        <p>{description}</p>
     </div>
      <div>
        <h2>{transliterator}</h2>
        <textarea
          className="transliteration-textarea"
          placeholder="Enter text to be transliterated here..."
        ></textarea>
        <div>
          <TransliterateButton isActive={isActive}/>
        </div>
        <p className="transliteration-output">output</p>
      </div>
    </div>
  )
}