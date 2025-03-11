export default function LeftTabButton({ children, onClick }) {
    return (
        <li>
            <button onClick={onClick}>{children}</button>
        </li>
    )
}