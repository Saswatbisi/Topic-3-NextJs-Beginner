// components/presentational/Button.js
export default function Button({ onClick, children, type = 'button', variant = 'primary' }) {
  const btnClass = variant === 'accent' ? 'btnAccent' : 'btnPrimary';
  return (
    <button type={type} onClick={onClick} className={`btn ${btnClass}`}>
      {children}
    </button>
  );
}
