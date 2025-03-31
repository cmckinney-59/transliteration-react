import { useState } from 'react';
import YesNoQuestion from './YesNoQuestion';

export default function ProperNownQuestion({
    enteredText,
    ...props
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
    showProperNounQuestion = <YesNoQuestion handleIsProperNoun={handleIsProperNoun} {...props} />;
  }

  if (isProperNoun && !notPhonetic) {
    showPhoneticQuestion = <YesNoQuestion handleIsProperNoun={handleNotPhonetic} {...props} />;
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