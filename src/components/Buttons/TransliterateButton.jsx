export default function transliterateButton({ onClick, isActive, text }) {

    return (
        <button 
            className={isActive ? 'active' : undefined} 
            onClick={onClick}
            disabled={text === null}>
            Transliterate
        </button>
    )
}