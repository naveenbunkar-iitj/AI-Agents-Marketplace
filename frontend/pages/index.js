import { useEffect, useState } from "react";
import AgentCard from "../components/AgentCard";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [agents, setAgents] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/agents/")
      .then((res) => res.json())
      .then((data) => setAgents(data))
      .catch(() => setAgents([]));
  }, []);

  const filteredAgents = agents.filter((agent) =>
    agent.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <main style={{ padding: "1.5rem" }}>
        <h1>AI Agents Marketplace</h1>
        <SearchBar value={query} onChange={setQuery} />
        {filteredAgents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </main>
    </div>
  );
}
