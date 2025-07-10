import React from "react";
import QuestionTemplate from "../../components/QuestionTemplate";

const QUESTION1 = "List three states of matter.";
const QUESTION2 = "Define Matter.";

const PROMPT1 = "Grade the student's answer for listing the three states of matter. If solid, liquid and gas is present, then say, Your answer is correct! Then put the rest of text on a new line. At the end, skip a line a say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors";
const PROMPT2 = "Grade the students answer for saying that matter is anything that has mass and volume. They should specify the words volume and mass. If correct then say Your answer is correct! Then put the rest of text on a new line. At the end, skip a line a say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors They should not use synonyms. If not do not have these two words or they have synonyms instead then point this out nicely to them";

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
          author="Daylan"
          from="Canada"
        />
        <QuestionTemplate
          question={QUESTION2}
          backgroundColor="#607D8B"
          prompt={PROMPT2}
          author="Daylan"
          from="Canada"
        />
      </div>
    </>
  );
};

export default DefinitionofMatter;