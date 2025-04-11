import { useState } from "react";
import YesNoQuestion from "./YesNoQuestion";

export default function ProperNownQuestion({
  enteredText,
  onEnterProperNounAnswer,
  next,
}) {
  const [isProperNoun, setIsProperNoun] = useState(false);
  const [isNotPhonetic, setIsNotPhonetic] = useState(false);
  const [answer, setAnswer] = useState("");

  let showProperNounQuestion = null;
  let showPhoneticQuestion = null;
  let showEnterPhoneticWord = null;

  const handleIsProperNoun = () => {
    setIsProperNoun(true);
  };

  const handleIsNotPhonetic = () => {
    setIsNotPhonetic(true);
  };

  if (!isProperNoun && !isNotPhonetic) {
    showProperNounQuestion = (
      <>
        <p>Is "{enteredText}" a proper noun?</p>
        <div>
          <button onClick={handleIsProperNoun}>Yes</button>
          <button onClick={next}>No</button>
        </div>
      </>
    );
  }

  if (isProperNoun && !isNotPhonetic) {
    showPhoneticQuestion = (
      <>
        <p>Is "{enteredText}" spelled phonetically?</p>
        <div>
          <button onClick={handleIsProperNoun}>Yes</button>
          <button onClick={handleIsNotPhonetic}>No</button>
        </div>
      </>
    );
  }

  if (isProperNoun && isNotPhonetic) {
    showEnterPhoneticWord = (
      <div>
        <p>Please spell {enteredText} phonetically.</p>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button onClick={() => onEnterProperNounAnswer(answer)}>Replace</button>
      </div>
    );
  }

  return (
    <>
      {showProperNounQuestion}
      {showPhoneticQuestion}
      {showEnterPhoneticWord}
    </>
  );
}
