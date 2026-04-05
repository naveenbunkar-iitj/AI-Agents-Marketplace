export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      placeholder="Search agents..."
      onChange={(e) => onChange(e.target.value)}
      style={{ marginBottom: "1rem", padding: "0.5rem", width: "100%" }}
    />
  );
}
