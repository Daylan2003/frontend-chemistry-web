import React, { useState } from "react";
import axios from "axios";

const General: React.FC = () => {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleGrade = async () => {
    if (!question.trim() || !answer.trim()) {
      alert("Please enter both a question and an answer.");
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const response = await axios.post("http://localhost:8000/grade", {
        question: question,
        students_answer: answer,
      });

      setResult(response.data.result);
    } catch (error) {
      setResult("An error occurred while grading.");
    }

    setLoading(false);
  };

  return (
    <>
      <div style={{ height: "30vh", width: "100vw", background: "#007BFF" }} />
      <div
        style={{
          backgroundColor: "#007BFF",
          minHeight: "100vh",
          width: "100%",
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
        <h2 style={{ margin: "0rem 0 1.5rem 0" }}>General Questions</h2>
        <p>Content for General Questions.</p>

        <input
          type="text"
          placeholder="Enter the chemistry question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
        />

        <textarea
          placeholder="Enter student's answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          style={{ width: "100%", height: "150px", marginBottom: "1rem", padding: "0.5rem" }}
        />

        <button onClick={handleGrade} disabled={loading} style={{ padding: "0.5rem 1rem" }}>
          {loading ? "Grading..." : "Grade Answer"}
        </button>

        <pre style={{ marginTop: "2rem", background: "#f5f5f5", padding: "1rem" }}>
          {result}
        </pre>
      </div>
    </>
  );
};

export default General;
