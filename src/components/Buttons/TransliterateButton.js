export default function transliterateButton({ onClick, isActive }) {

    return (
        <button 
            className={isActive ? 'active' : undefined} 
            onClick={onClick}>
            Transliterate
        </button>
    )
}