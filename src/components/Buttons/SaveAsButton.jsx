export default function saveAsButton({ handleClick }) {
  const fileTypes = ["Word", "Text", "Excel"];

  return (
    <section>
      <label htmlFor="options">Choose a file type: </label>
      <select id="options" onChange={handleClick}>
        <option value=""></option>
        {fileTypes.map((fileTypes) => (
          <option key={fileTypes} value={fileTypes}>
            {fileTypes}
          </option>
        ))}
      </select>
    </section>
  );
}
