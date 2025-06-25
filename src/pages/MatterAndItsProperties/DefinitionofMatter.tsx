import React from "react";
import QuestionTemplate from "../../components/QuestionTemplate";

const ARBITRARY_QUESTION = "What is matter?";
const SECOND_QUESTION = "List three states of matter.";

const DefinitionofMatter: React.FC = () => (
  <div
    style={{
      backgroundColor: "#607D8B",
      minHeight: "100vh",
      width: "100vw",
      margin: 0,
      padding: "2rem",
      color: "white",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
    }}
  >
    <h2 style={{ margin: "3.5rem 0 1.5rem 0" }}>Definition of Matter</h2>
    <QuestionTemplate question={ARBITRARY_QUESTION} backgroundColor="#607D8B" />
    <QuestionTemplate question={SECOND_QUESTION} backgroundColor="#607D8B" />
  </div>
);

export default DefinitionofMatter;