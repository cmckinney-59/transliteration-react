export default function LeftTabButton({ children, onClick }) {
    return (
        <button onClick={onClick}>{children}</button>
    )
}