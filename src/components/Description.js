const transliterationAlphabets = ['Baybayin', 'Aurebesh', 'Deseret']
let currentAlphabet = 0;
const alphabet = transliterationAlphabets[currentAlphabet];

export default function Description() {
  return (
    <div>
      <h2>What is {alphabet}?</h2>
      <p>This is the {alphabet} description</p>
    </div>
  )
}