import React from "react";
import QuestionTemplate from "../../components/QuestionTemplate";

const QUESTION1 = "List three states of matter.";
const QUESTION2 = "Define Matter.";

const PROMPT1 = "Grade the student's answer for listing the three states of matter. If solid, liquid and glass is present, then simply say Congratulations ! You answer is 100% correct. If there are spelling errors still give the answer correct but point out the spelling errors";
const PROMPT2 = "Grade the student's definition of matter. Look for the idea that matter has mass and occupies space.";

const DefinitionofMatter: React.FC = () => {
  return (
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
        <QuestionTemplate
          question={QUESTION1}
          backgroundColor="#607D8B"
          prompt={PROMPT1}
        />
        <QuestionTemplate
          question={QUESTION2}
          backgroundColor="#607D8B"
          prompt={PROMPT2}
        />
      </div>
    </>
  );
};

export default DefinitionofMatter;