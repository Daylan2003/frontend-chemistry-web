import React, { useState } from "react";
import axios from "axios";

interface QuestionTemplateProps {
  question: string;
  backgroundColor: string;
  prompt?: string; // Add this line
  author?: string;
  from?: string;
}

// ... imports and interface remain the same

const QuestionTemplate: React.FC<QuestionTemplateProps> = ({
  question,
  backgroundColor = "#607D8B",
  author = "Unknown",
  from = "Unknown",
  prompt,
}) => {
  const [answer, setAnswer] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [clearAnswerPressed, setClearAnswerPressed] = useState(false);
  const [clearFeedbackPressed, setClearFeedbackPressed] = useState(false);
  const [gradeHover, setGradeHover] = useState(false);
  const [clearAnswerHover, setClearAnswerHover] = useState(false);
  const [clearFeedbackHover, setClearFeedbackHover] = useState(false);

  const handleGrade = async () => {
    if (!answer.trim()) {
      alert("Please enter an answer.");
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const response = await axios.post("https://backend-chemistry-web.onrender.com/grade", {
        question,
        students_answer: answer,
        prompt,
      });

      setResult(response.data.result);
    } catch (error) {
      setResult("An error occurred while grading.");
    }

    setLoading(false);
  };

  // ✅ New clear handlers
  const clearAnswer = () => setAnswer("");
  const clearResult = () => setResult("");

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

      {/* Buttons container */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <button
          onClick={handleGrade}
          disabled={loading}
          onMouseEnter={() => setGradeHover(true)}
          onMouseLeave={() => setGradeHover(false)}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "12px",
            border: gradeHover ? "2px solid white" : "2px solid #b0bec5",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            background: "#455A64",
            color: gradeHover ? "white" : "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.15s, border 0.15s, color 0.15s",
          }}
        >
          {loading ? "Grading..." : "Grade Answer"}
        </button>

        <button
          onClick={clearAnswer}
          onMouseDown={() => setClearAnswerPressed(true)}
          onMouseUp={() => setClearAnswerPressed(false)}
          onMouseEnter={() => setClearAnswerHover(true)}
          onMouseLeave={() => { setClearAnswerPressed(false); setClearAnswerHover(false); }}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "12px",
            border: clearAnswerHover ? "2px solid white" : "2px solid #b0bec5",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            background: clearAnswerPressed ? "#ff1744" : "#b71c1c",
            color: clearAnswerHover ? "white" : "white",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "background 0.15s, border 0.15s, color 0.15s",
          }}
        >
          Clear Answer
        </button>
      </div>

      <pre
        style={{
          marginTop: "1rem",
          background: "#f5f5f5",
          padding: "1rem",
          color: "#222",
          borderRadius: "16px",
          border: "2px solid #b0bec5",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          minHeight: "3rem",
          whiteSpace: "pre-wrap",           //  Wrap long lines
          wordWrap: "break-word",           //  Break long words
          overflowX: "auto",                //  Horizontal scrollbar if still too long
          maxHeight: "300px",               //  Optional: cap height & make scrollable
          overflowY: "auto",                //  Vertical scrollbar if content is long
        }}
      >
        {result}
      </pre>

      <button
          onClick={clearResult}
          onMouseDown={() => setClearFeedbackPressed(true)}
          onMouseUp={() => setClearFeedbackPressed(false)}
          onMouseEnter={() => setClearFeedbackHover(true)}
          onMouseLeave={() => { setClearFeedbackPressed(false); setClearFeedbackHover(false); }}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "12px",
            border: clearFeedbackHover ? "2px solid white" : "2px solid #b0bec5",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            background: clearFeedbackPressed ? "#ff1744" : "#b71c1c",
            color: clearFeedbackHover ? "white" : "white",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "background 0.15s, border 0.15s, color 0.15s",
          }}
        >
          Clear Feedback
        </button>
    </div>
  );
};

export default QuestionTemplate;
