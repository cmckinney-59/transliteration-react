import DialogNavButtons from "./DialogNavButtons";
import PhoneticCharactersQuestion from "./PhoneticCharictersQuestion";
import ProperNownQuestion from "./ProperNounQuestion";

export default function QuestionDialog({ enteredText, ...props }) {
    const wordIncludesCapital = /[A-Z]/.test(enteredText);
  
    return (
      <dialog className="dialog-overlay">
        <div className="dialog-box">
          <h3>Word Review</h3>

          { wordIncludesCapital
          ? <ProperNownQuestion {...props}/>
          : <PhoneticCharactersQuestion {...props}/>}\

          <DialogNavButtons {...props}/>
        </div>
      </dialog>
    )
}