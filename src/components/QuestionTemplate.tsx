import React, { useState } from "react";
import axios from "axios";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface QuestionTemplateProps {
  question: string;
  backgroundColor: string;
  prompt?: string;
  author?: string;
  from?: string;
  questionNumber?: number;
  id?: string;
  isGeneralQuestion?: boolean; // Add this to distinguish between general Q&A and grading
}

// ... imports and interface remain the same

const QuestionTemplate: React.FC<QuestionTemplateProps> = ({
  question,
  backgroundColor = "#607D8B",
  author = "Unknown",
  from = "Unknown",
  prompt,
  questionNumber = 0,
  id,
  isGeneralQuestion = false,
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
      if (isGeneralQuestion) {
        // Use the chemistry answer endpoint for general questions
        const response = await axios.post("https://backend-chemistry-web.onrender.com/answer-chemistry", {
          question: answer,
        });
        setResult(response.data.answer || "No answer returned.");
      } else {
        // Use the grading endpoint for regular questions
        const response = await axios.post("https://backend-chemistry-web.onrender.com/grade", {
          question,
          students_answer: answer,
          prompt,
        });
        setResult(response.data.result);
      }
    } catch (error) {
      setResult(isGeneralQuestion ? "An error occurred while getting the answer." : "An error occurred while grading.");
    }

    setLoading(false);
  };

  // ✅ New clear handlers
  const clearAnswer = () => setAnswer("");
  const clearResult = () => setResult("");

  // Function to render text with math expressions
  const renderTextWithMath = (text: string) => {
    if (!text) return null;
    
    // Split text by LaTeX delimiters
    const parts = text.split(/(\$[^$]+\$)/);
    
    return parts.map((part, index) => {
      if (part.startsWith('$') && part.endsWith('$')) {
        // Extract the math expression
        const mathExpr = part.slice(1, -1);
        try {
          return <InlineMath key={index} math={mathExpr} />;
        } catch (error) {
          // If KaTeX fails to parse, return the original text
          return <span key={index}>{part}</span>;
        }
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div
      style={{
        marginTop: "2.5rem",
        background: backgroundColor,
        borderRadius: "16px",
        padding: "1.5rem 2rem 3rem 2rem",
        maxWidth: 600,
        width: "100%",
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
        position: "relative",
      }}
    >
      {/* Difficulty Label */}
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1.5rem",
          color: "#4CAF50",
          fontWeight: "bold",
          fontSize: "0.9rem",
          backgroundColor: "rgba(76, 175, 80, 0.1)",
          padding: "0.25rem 0.5rem",
          borderRadius: "8px",
          border: "1px solid #4CAF50",
        }}
      >
        EASY
      </div>

      {/* Question ID */}
      <div
        style={{
          position: "absolute",
          bottom: "1.1rem",
          left: "2rem",
          color: "white",
          fontWeight: "bold",
          fontSize: "0.9rem",
        }}
      >
        ID: {id}
      </div>

      <div style={{ marginBottom: "0.5rem", fontSize: "1rem", color: "#e0e0e0" }}>
        <strong>Question Author:</strong> {author}
        <br />
        <span><strong>From:</strong> {from}</span>
      </div>

      <div style={{ marginBottom: "1rem", fontWeight: "bold" }}>
        Question: {question}
      </div>

      <textarea
        placeholder={isGeneralQuestion ? "Enter your chemistry question here" : "Enter student's answer"}
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
          {loading ? (isGeneralQuestion ? "Getting Answer..." : "Grading...") : (isGeneralQuestion ? "Get Answer" : "Grade Answer")}
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

      <div
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
          lineHeight: "1.5",
        }}
      >
        {renderTextWithMath(result)}
      </div>

      <button
        onClick={clearResult}
        onMouseDown={() => setClearFeedbackPressed(true)}
        onMouseUp={() => setClearFeedbackPressed(false)}
        onMouseEnter={() => setClearFeedbackHover(true)}
        onMouseLeave={() => { setClearFeedbackPressed(false); setClearFeedbackHover(false); }}
        style={{
          marginTop: "1.5rem",
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
        Clear Answer
      </button>
    </div>
  );
};

export default QuestionTemplate;
