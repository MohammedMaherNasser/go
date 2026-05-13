export default function Persons({ persons }) {
  return (
    <ul className="list">
      {persons.map(p => (
        <li key={p.id}>
          {p.name} — {p.number}
        </li>
      ))}
    </ul>
  );
}
