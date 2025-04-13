import DialogNavButtons from "./DialogNavButtons";
import PhoneticCharactersQuestion from "./PhoneticCharictersQuestion";
import ProperNownQuestion from "./ProperNounQuestion";

export default function QuestionDialog({
  enteredText,
  onPhoneticAnswerSelected,
  onProperNounEntered,
  onSkip,
  ...props
}) {
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
