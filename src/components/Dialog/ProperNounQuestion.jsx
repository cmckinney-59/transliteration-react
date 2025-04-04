import { useState } from 'react';

export default function ProperNownQuestion({
    enteredText,
    next
  }) {
    const [isProperNoun, setIsProperNoun] = useState(false);
    const [notPhonetic, setNotPhonetic] = useState(false);

    let showProperNounQuestion = null;
    let showPhoneticQuestion = null;
    let showEnterPhoneticWord = null;

    const handleIsProperNoun = () => {
    setIsProperNoun(true);
    };

    const handleNotPhonetic = () => {
    setNotPhonetic(true);
    };


  if (!isProperNoun && !notPhonetic) {
    showProperNounQuestion = (
        <div>
            <p>Is {enteredText} a proper noun?</p>
            <div>
                <button onClick={handleIsProperNoun}>Yes</button>
                <button onClick={next}>No</button>
            </div>
        </div>
    );
  }

  if (isProperNoun && !notPhonetic) {
    showPhoneticQuestion = (
        <div>
            <p>Is {enteredText} spelled phonetically?</p>
            <div>
                <button onClick={next}>Yes</button>
                <button onClick={handleNotPhonetic}>No</button>
            </div>
        </div>
    );
  }

  if (isProperNoun && notPhonetic) {
    showEnterPhoneticWord = (
        <div>
            <p>Please spell {enteredText} phonetically.</p>
            <input />
        </div>
    );
  }

    return (
        <>
            {showProperNounQuestion}
            {showPhoneticQuestion}
            {showEnterPhoneticWord}
        </>
    )
}