import Part from "./Part";

export default function Content({ parts }) {
  return (
    <div>
      {parts.map(p => (
        <Part key={p.id} part={p} />
      ))}
    </div>
  );
}
