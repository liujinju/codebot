export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    // Shared header block to keep section titles visually consistent.
    <div className="section-header" data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {subtitle ? <p className="subtitle">{subtitle}</p> : null}
    </div>
  );
}
