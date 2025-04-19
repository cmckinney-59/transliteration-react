import React from "react";
import DialogNavButtons from "./DialogNavButtons";
import PhoneticCharactersQuestion from "./PhoneticCharictersQuestion";
import ProperNownQuestion from "./ProperNounQuestion";

interface QuestionDialogProps {
  enteredText: string;
  onPhoneticAnswerSelected?: (answer: string) => void;
  onProperNounEntered?: (answer: string) => void;
  onSkip: () => void;
  close: () => void;
  phoneticQuestionChar?: string;
  phoneticAnswerChar1?: string;
  phoneticAnswerChar2?: string;
  phoneticAnswerChar3?: string | null;
}

export default function QuestionDialog({
  enteredText,
  onPhoneticAnswerSelected,
  onProperNounEntered,
  onSkip,
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
            {...props}
          />
        ) : (
          <PhoneticCharactersQuestion
            enteredText={enteredText}
            onSelectPhoneticAnswer={onPhoneticAnswerSelected}
            {...props}
          />
        )}

        <DialogNavButtons onSkip={onSkip} {...props} />
      </div>
    </dialog>
  );
}
