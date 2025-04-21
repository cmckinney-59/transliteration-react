import React, { JSX } from "react";

interface PhoneticCharactersQuestionProps {
  enteredText: string;
  phoneticQuestionChar: string;
  phoneticAnswerChar1: string;
  phoneticAnswerChar2: string;
  phoneticAnswerChar3?: string | null;
  onSelectPhoneticAnswer: (answer: string) => void;
}

export default function PhoneticCharactersQuestion({
  enteredText,
  phoneticQuestionChar,
  phoneticAnswerChar1,
  phoneticAnswerChar2,
  phoneticAnswerChar3,
  onSelectPhoneticAnswer,
}: PhoneticCharactersQuestionProps) {
  const phoneticAnswers = [
    phoneticAnswerChar1,
    phoneticAnswerChar2,
    phoneticAnswerChar3,
  ].reduce<JSX.Element[]>((acc, answer) => {
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
