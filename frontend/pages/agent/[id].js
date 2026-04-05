import { useRouter } from "next/router";

export default function AgentDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main style={{ padding: "1.5rem" }}>
      <h1>Agent Detail</h1>
      <p>Viewing agent ID: {id}</p>
    </main>
  );
}
