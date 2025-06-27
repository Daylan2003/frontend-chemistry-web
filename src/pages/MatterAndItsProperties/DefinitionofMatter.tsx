import React from "react";
import QuestionTemplate from "../../components/QuestionTemplate";

const ARBITRARY_QUESTION = "What is matter?";
const SECOND_QUESTION = "List three states of matter.";

const DefinitionofMatter: React.FC = () => (
  <>
    {/* Colored bar below header, unique to this page */}
    <div style={{ height: "30vh", width: "100vw", background: "#607D8B" }} />
    <div
      style={{
        backgroundColor: "#607D8B",
        minHeight: "100vh",
        width: "100%",
        marginTop: "-1px", // Overlap to hide any line
        padding: "2rem",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ margin: "0rem 0 1.5rem 0" }}>Definition of Matter</h2>
      <QuestionTemplate question={ARBITRARY_QUESTION} backgroundColor="#607D8B" />
      <QuestionTemplate question={SECOND_QUESTION} backgroundColor="#607D8B" />
    </div>
  </>
);

export default DefinitionofMatter;