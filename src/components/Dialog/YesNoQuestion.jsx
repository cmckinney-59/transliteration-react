// This is currently not being used. I may want to implement it once the whole app is working. As of now it adds an extra unneeded layer of complexity.

export default function YesNoQuestion({
  enteredText,
  handleIsProperNoun,
  handleNotPhonetic,
  next,
}) {
  let question = null;

  if (handleIsProperNoun) {
    question = `Is "${enteredText}" a proper noun?`;
  } else if (handleNotPhonetic) {
    question = `Is "${enteredText}" spelled phonetically?`;
  }

  return (
    <div>
      {question && <p>{question}</p>}
      <div>
        <button onClick={handleIsProperNoun ? handleIsProperNoun : next}>
          Yes
        </button>
        <button onClick={handleNotPhonetic ? handleNotPhonetic : next}>
          No
        </button>
      </div>
    </div>
  );
}
