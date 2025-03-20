import './AlphabetPicker.css';

export default function AlphabetPicker({ selectedPage, handleClick}) {
  return (
    <section>
      <label htmlFor="options">Choose an alphabet: </label>
      <select id="options" value={selectedPage} onChange={handleClick}>
        <option value="">Select...</option>
        <option value="Baybayin">Baybayin</option>
        <option value="Aurebesh">Aurebesh</option>
        <option value="Deseret">Deseret</option>
      </select>
    </section>
  );
}
