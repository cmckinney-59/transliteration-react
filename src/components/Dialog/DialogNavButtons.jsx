export default function DialogNavButtons({ close, onSkip }) {
  return (
    <div className="dialog-nav-buttons">
      <button onClick={onSkip}>Skip</button>
      <button onClick={close}>Close</button>
    </div>
  );
}
