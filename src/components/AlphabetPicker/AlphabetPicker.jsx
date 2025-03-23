import './AlphabetPicker.css';

export default function AlphabetPicker({ selectedPage, handleClick}) {
  const alphabets = ["Baybayin", "Aurebesh", "Deseret"];

  return (
    <section>
      <label htmlFor="options">Choose an alphabet: </label>
      <select id="options" value={selectedPage} onChange={handleClick}>
        <option value=""></option>
          {alphabets.map((alphabet) => (
            <option key={alphabet} value={alphabet}>{alphabet}</option>
          ))}
      </select>
    </section>
  );
}
