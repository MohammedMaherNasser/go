export default function Total({ parts }) {
  const total = parts.reduce((sum, p) => sum + p.exercises, 0);

  return <h3>Total of {total} exercises</h3>;
}
