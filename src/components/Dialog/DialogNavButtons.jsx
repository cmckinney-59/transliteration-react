export default function DialogNavButtons({  close }) {
    return (
        <div className="dialog-nav-buttons">
            <button onClick={close}>Skip</button>
            <button onClick={close}>Close</button>
        </div>
    )
}