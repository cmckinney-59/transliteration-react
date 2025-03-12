export default function transliterate({ onClick, isAvailable}) {
    return (
        <button 
            className={isAvailable ? 'active' : undefined} 
            onClick={onClick}>
            Transliterate
        </button>
    )
}