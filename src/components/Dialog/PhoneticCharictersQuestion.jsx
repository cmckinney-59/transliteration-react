export default function PhoneticCharactersQuestion({
  enteredText,
  phoneticQuestionChar,
  phoneticAnswerChar1,
  phoneticAnswerChar2,
  phoneticAnswerChar3,
  onSelectPhoneticAnswer,
}) {
  const phoneticAnswers = [
    phoneticAnswerChar1,
    phoneticAnswerChar2,
    phoneticAnswerChar3,
  ].reduce((acc, answer) => {
    if (answer) {
      acc.push(
        <button key={answer} onClick={() => onSelectPhoneticAnswer(answer)}>
          {answer}
        </button>
      );
    }
    return acc;
  }, []);

  return (
    <>
      <p>
        What does the '{phoneticQuestionChar}' in '{enteredText}' sound like?
      </p>
      <div className="phonetic-answers">{phoneticAnswers}</div>
    </>
  );
}
