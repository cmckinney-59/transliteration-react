export default function QuestionDialog({
  enteredText,
  onClick,
  phoneticQuestionChar,
  phoneticAnswerChar1,
  phoneticAnswerChar2,
  phoneticAnswerChar3
}) {
    return (
    <div className="dialog-overlay">
        <div className="dialog-box">
          <h3>Word Review</h3>
          <p>Does the '{phoneticQuestionChar}' in {enteredText} sound like '{phoneticAnswerChar1}' or '{phoneticAnswerChar2}' or '{phoneticAnswerChar3}'?</p>
          <div className="phonetic-answers">
            { phoneticAnswerChar1 !== null ? <button>{phoneticAnswerChar1}</button> : null}
            { phoneticAnswerChar2 !== null ? <button>{phoneticAnswerChar2}</button> : null}
            { phoneticAnswerChar3 !== null ? <button>{phoneticAnswerChar3}</button> : null}
          </div>
          <div className="dialog-nav-buttons">
            <button onClick={onClick}>Skip</button>
            <button onClick={onClick}>Close</button>
          </div>
        </div>
      </div>
    )
}