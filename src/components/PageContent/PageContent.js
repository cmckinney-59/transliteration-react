import './PageContent.css';

export default function PageContent({image, title, description, whatIs, transliterator}) {
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
          id="userInput"
          placeholder="Enter text to be transliterated here..."
        ></textarea>
      </div>
    </div>
  )
}