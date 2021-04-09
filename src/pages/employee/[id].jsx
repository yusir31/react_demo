export default function Employee({
  match: {
    params: { id },
  },
}) {
  return (
    <div>
      <h1>Employee {id} 's Page</h1>
    </div>
  );
}
