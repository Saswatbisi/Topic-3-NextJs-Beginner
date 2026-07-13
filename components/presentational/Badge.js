// components/presentational/Badge.js
export default function Badge({ text, status = 'pending' }) {
  const isCompleted = status === 'completed';
  const badgeClass = isCompleted ? 'badgeCompleted' : 'badgePending';
  return <span className={`badge ${badgeClass}`}>{text}</span>;
}
