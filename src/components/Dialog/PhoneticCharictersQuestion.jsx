import ProperNownQuestion from "./ProperNounQuestion";

export default function PhoneticCharactersQuestion({
  enteredText,
  phoneticQuestionChar,
  phoneticAnswerChar1,
  phoneticAnswerChar2,
  phoneticAnswerChar3
}) {
    return (
        <>
            <p>Does the '{phoneticQuestionChar}' in {enteredText} sound like '{phoneticAnswerChar1}' or '{phoneticAnswerChar2}' or '{phoneticAnswerChar3}'?</p>
            <div className="phonetic-answers">
            { phoneticAnswerChar1 !== null ? <button>{phoneticAnswerChar1}</button> : null}
            { phoneticAnswerChar2 !== null ? <button>{phoneticAnswerChar2}</button> : null}
            { phoneticAnswerChar3 !== null ? <button>{phoneticAnswerChar3}</button> : null}
            </div>
        </>
    )
}