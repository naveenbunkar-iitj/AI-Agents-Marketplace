export default function AgentCard({ agent }) {
  return (
    <div
      className="card"
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        marginBottom: "1rem",
        padding: "1rem",
      }}
    >
      <h2>{agent.name}</h2>
      <p>{agent.description}</p>
      <button type="button">Run Agent</button>
    </div>
  );
}
