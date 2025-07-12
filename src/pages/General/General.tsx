import React, { useState } from "react";

const General: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAsk = async () => {
    setLoading(true);
    setError("");
    setResponse("");
    try {
      // Only send the user's question to the backend
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      if (!res.ok) throw new Error("Failed to get response from backend");
      const data = await res.json();
      setResponse(data.answer || "No answer returned.");
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#007BFF",
        minHeight: "100vh",
        width: "100vw",
        marginTop: "-1px",
        padding: "2rem",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        boxSizing: "border-box",
      }}
    >
      {/* Add a large margin at the top like in DefinitionofMatter.tsx */}
      <div style={{ height: "30vh", width: "100vw", background: "#007BFF" }} />
      <div
        style={{
          background: "#1A237E", // dark blue
          color: "#fff",
          borderRadius: "18px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
          padding: "2rem 2rem 1.5rem 2rem",
          maxWidth: 600,
          width: "100%",
          marginBottom: "2rem",
          marginTop: "-1px",
        }}
      >
        <div style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: "1.5rem", color: "#fff" }}>
          Ask any chemistry related question you like.
        </div>
        <textarea
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="Type your question here..."
          rows={3}
          style={{
            width: "100%",
            borderRadius: "12px",
            border: "2px solid #b0bec5",
            fontSize: "1rem",
            padding: "1rem",
            marginBottom: "1.5rem",
            resize: "vertical",
            boxSizing: "border-box",
            color: "#222"
          }}
        />
        <button
          onClick={handleAsk}
          disabled={loading || !question.trim()}
          style={{
            background: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "12px",
            padding: "0.75rem 2.5rem",
            fontSize: "1.1rem",
            fontWeight: 600,
            cursor: loading || !question.trim() ? "not-allowed" : "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            marginBottom: "1.5rem",
            transition: "background 0.2s"
          }}
        >
          {loading ? "Asking..." : "Ask"}
        </button>
        <div
          style={{
            minHeight: "3.5rem",
            background: "#f5f5f5",
            borderRadius: "12px",
            border: "2px solid #b0bec5",
            padding: "1rem",
            color: "#333",
            fontSize: "1rem",
            marginTop: "0.5rem",
            whiteSpace: "pre-wrap",
          }}
        >
          {error ? <span style={{ color: "#d32f2f" }}>{error}</span> : response}
        </div>
      </div>
      {/* Coloured div of size 128px under everything */}
      <div style={{ width: "100%", height: 128, background: "#007BFF" }} />
    </div>
  );
};

export default General;
