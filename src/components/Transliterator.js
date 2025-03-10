import './Transliterator.css'

const transliterationAlphabets = ['Baybayin', 'Aurebesh', 'Deseret']
let currentAlphabet = 0;
const alphabet = transliterationAlphabets[currentAlphabet];

export default function Transliterator() {
  return (
    <div>
      <h2>{alphabet} Transliterator</h2>
      <p>This is the {alphabet} Transliterator</p>
      <textarea
        class="transliteration-input"
        id="userInput"
        placeholder="Enter text to be transliterated here..."
      ></textarea>
    </div>
  )
}