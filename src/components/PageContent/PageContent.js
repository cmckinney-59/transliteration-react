import Description from '../../components/Description/Description.js'
import Transliterator from '../../components/Transliterator/Transliterator.js'

export default function PageContent({image, title, description, whatIs, transliterator}) {
  return(
    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <div>
        <h2>{whatIs}</h2>
        <p>{description}</p>
     </div>
      <div>
        <h2>{transliterator}</h2>
        <textarea
          class="transliteration-input"
          id="userInput"
          placeholder="Enter text to be transliterated here..."
        ></textarea>
      </div>
    </li>
  )
}