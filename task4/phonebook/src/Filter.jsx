export default function Filter({ filter, setFilter }) {
  return (
    <div style={{ marginBottom: 10 }}>
      filter shown with:{" "}
      <input value={filter} onChange={e => setFilter(e.target.value)} />
    </div>
  );
}
