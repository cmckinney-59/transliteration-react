import React, { useState, JSX } from "react";

interface ProperNownQuestionProps {
  enteredText: string;
  onEnterProperNounAnswer: (answer: string) => void;
  onSkip: () => void;
}

export default function ProperNownQuestion({
  enteredText,
  onEnterProperNounAnswer,
  onSkip,
}: ProperNownQuestionProps) {
  const [isProperNoun, setIsProperNoun] = useState<boolean>(false);
  const [isNotPhonetic, setIsNotPhonetic] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string>("");

  let showProperNounQuestion: JSX.Element | null = null;
  let showPhoneticQuestion: JSX.Element | null = null;
  let showEnterPhoneticWord: JSX.Element | null = null;

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
          <button onClick={onSkip}>No</button>
        </div>
      </>
    );
  }

  if (isProperNoun && !isNotPhonetic) {
    showPhoneticQuestion = (
      <>
        <p>Is "{enteredText}" spelled phonetically?</p>
        <div>
          <button onClick={onSkip}>Yes</button>
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAnswer(e.target.value)
          }
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
