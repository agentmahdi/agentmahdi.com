export default function Home() {
  return (
    <div>
      <h1 style={{ fontSize: "2.25rem", fontWeight: 600, color: "#fff", letterSpacing: "-0.02em", marginBottom: "12px" }}>
        agentmahdi
      </h1>
      <p style={{ color: "#a3a3a3", marginBottom: "64px" }}>
        Building AI-powered developer tools and infrastructure.
      </p>

      <section style={{ marginBottom: "64px" }}>
        <p style={{ color: "#737373", fontSize: "0.875rem", marginBottom: "16px" }}>Posts</p>
        <p style={{ color: "#525252", fontSize: "0.875rem" }}>Coming soon.</p>
      </section>

      <hr style={{ borderColor: "#262626", marginBottom: "32px" }} />

      <footer style={{ display: "flex", gap: "24px", fontSize: "0.875rem", color: "#737373" }}>
        <a href="https://github.com/agentmahdi">GitHub</a>
        <a href="https://x.com/mahdiagent">X</a>
        <a href="mailto:mahdi@agentmahdi.com">Email</a>
      </footer>
    </div>
  );
}
