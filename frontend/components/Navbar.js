import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ borderBottom: "1px solid #ddd", padding: "1rem 1.5rem" }}>
      <Link href="/" style={{ marginRight: "1rem" }}>
        Marketplace
      </Link>
      <Link href="/dashboard">Dashboard</Link>
    </nav>
  );
}
