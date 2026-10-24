export default function SectionHead({ label, title }) {
  return (
    <>
      <div className="section-label">{label}</div>
      <h2 className="section-title">{`// ${title}`}</h2>
    </>
  );
}
