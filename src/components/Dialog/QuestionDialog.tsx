import React from "react";
import DialogNavButtons from "./DialogNavButtons.tsx";
import PhoneticCharactersQuestion from "./PhoneticCharictersQuestion.tsx";
import ProperNownQuestion from "./ProperNounQuestion.tsx";

interface QuestionDialogProps {
  enteredText: string;
  onPhoneticAnswerSelected: (answer: string) => void;
  onProperNounEntered: (answer: string) => void;
  onSkip: () => void;
  close: () => void;
  phoneticQuestionChar: string;
  phoneticAnswerChar1: string;
  phoneticAnswerChar2: string;
  phoneticAnswerChar3?: string | null;
}

export default function QuestionDialog({
  enteredText,
  onPhoneticAnswerSelected,
  onProperNounEntered,
  onSkip,
  phoneticQuestionChar,
  phoneticAnswerChar1,
  phoneticAnswerChar2,
  phoneticAnswerChar3,
  ...props
}: QuestionDialogProps) {
  const wordIncludesCapital = /[A-Z]/.test(enteredText);

  return (
    <dialog className="dialog-overlay">
      <div className="dialog-box">
        <h3>Word Review</h3>

        {wordIncludesCapital ? (
          <ProperNownQuestion
            enteredText={enteredText}
            onEnterProperNounAnswer={onProperNounEntered}
            onSkip={onSkip}
            {...props}
          />
        ) : (
          <PhoneticCharactersQuestion
            enteredText={enteredText}
            onSelectPhoneticAnswer={onPhoneticAnswerSelected}
            phoneticQuestionChar={phoneticQuestionChar}
            phoneticAnswerChar1={phoneticAnswerChar1}
            phoneticAnswerChar2={phoneticAnswerChar2}
            phoneticAnswerChar3={phoneticAnswerChar3}
            {...props}
          />
        )}

        <DialogNavButtons onSkip={onSkip} {...props} />
      </div>
    </dialog>
  );
}
