export default function PhoneticCharactersQuestion({
    enteredText,
    phoneticQuestionChar,
    phoneticAnswerChar1,
    phoneticAnswerChar2,
    phoneticAnswerChar3
  }) {
    const phoneticAnswers = [phoneticAnswerChar1, phoneticAnswerChar2, phoneticAnswerChar3].filter(Boolean);

    return (
      <>
        <p>What does the '{phoneticQuestionChar}' in '{enteredText}' sound like?</p>
        <div className="phonetic-answers">
          {phoneticAnswers.map((answer) => (
            <button key={answer}>{answer}</button>
          ))}
        </div>
      </>
    );
  }
  