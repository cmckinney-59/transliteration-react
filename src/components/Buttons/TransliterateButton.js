export default function transliterate({ onClick, isSelected}) {
    return (
        <button 
            className={isSelected ? 'active' : undefined} 
            onClick={onClick}>
            Transliterate
        </button>
    )
}