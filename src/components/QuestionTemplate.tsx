import React, { useState } from "react";
import axios from "axios";

interface QuestionTemplateProps {
  question: string;
  backgroundColor: string;
  prompt?: string; // Add this line
  author?: string;
  from?: string;
}

const QuestionTemplate: React.FC<QuestionTemplateProps> = ({
  question,
  backgroundColor = "#607D8B",
  author = "Unknown",
  from = "Unknown",
  prompt, // Destructure prompt
}) => {
  const [answer, setAnswer] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleGrade = async () => {
    if (!answer.trim()) {
      alert("Please enter an answer.");
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const response = await axios.post("https://backend-chemistry-web.onrender.com", {
        question: question,
        students_answer: answer,
        prompt, // send the custom prompt
      });

      setResult(response.data.result);
    } catch (error) {
      setResult("An error occurred while grading.");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        marginTop: "2.5rem",
        background: "rgba(255,255,255,0.08)",
        borderRadius: "16px",
        padding: "1.5rem 2rem",
        maxWidth: 600,
        width: "100%",
        boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
      }}
    >
      {/* Author and From section */}
      <div style={{ marginBottom: "0.5rem", fontSize: "1rem", color: "#e0e0e0" }}>
        <strong>Question Author:</strong> {author}
        <br />
        <span><strong>From:</strong> {from}</span>
      </div>

      <div style={{ marginBottom: "1rem", fontWeight: "bold" }}>
        Question: {question}
      </div>

      <textarea
        placeholder="Enter student's answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        style={{
          width: "100%",
          height: "150px",
          marginBottom: "1rem",
          padding: "0.5rem",
          borderRadius: "16px",
          border: "2px solid #b0bec5",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          resize: "vertical",
        }}
      />

      <button
        onClick={handleGrade}
        disabled={loading}
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "12px", // bevel for button
          border: "2px solid #b0bec5",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          background: "#455A64",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "background 0.2s, box-shadow 0.2s",
        }}
      >
        {loading ? "Grading..." : "Grade Answer"}
      </button>

      <pre
        style={{
          marginTop: "2rem",
          background: "#f5f5f5",
          padding: "1rem",
          color: "#222",
          borderRadius: "16px",
          border: "2px solid #b0bec5",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          minHeight: "3rem",
        }}
      >
        {result}
      </pre>
    </div>
  );
};

export default QuestionTemplate;