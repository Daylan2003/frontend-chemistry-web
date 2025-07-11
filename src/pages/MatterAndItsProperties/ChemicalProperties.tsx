import React, { useState } from "react";
import QuestionTemplate from "../../components/QuestionTemplate";
import SearchAndFilter from "../../components/SearchAndFilter";

const QUESTION1 = "What happens when something changes into another substance ? For example when wood burns.";
const QUESTION2 = "How can you tell if a chemical change is occuring ? For example of metal rusting.";

const PROMPT1 = "Grade the student for saying that a chemical reaction is happening. Atoms are rearranged and chemical bonds are broken and new ones are formed resulting in new substances being created. If correct then say Your answer is correct! Then put the rest of text on a new line. At the end, skip a line a say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors.";
const PROMPT2 = "Grade the student for saying that you can identify a chemical change by observing a colour change, gas production, formation of a precipitate, a temperature change or light production. If the student does not have all then point this out nicely to them If correct then say Your answer is correct! Then put the rest of text on a new line. At the end, skip a line a say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors.";

const ChemicalProperties: React.FC = () => {
  const [filteredQuestions, setFilteredQuestions] = useState<any[]>([]);

  const questions = [
    { question: QUESTION1, prompt: PROMPT1, author: "Daylan", from: "Canada", difficulty: "EASY" },
    { question: QUESTION2, prompt: PROMPT2, author: "Daylan", from: "Canada", difficulty: "EASY" },
  ];

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
        <h2 style={{ margin: "0rem 0 1.5rem 0" }}>Chemical Properties</h2>
        
        {/* Search and Filter Component */}
        <SearchAndFilter 
          questions={questions}
          onFilteredQuestionsChange={setFilteredQuestions}
        />

        {/* Filtered Questions */}
        {filteredQuestions.map((q, index) => (
          <QuestionTemplate
            key={index}
            question={q.question}
            backgroundColor="#607D8B"
            prompt={q.prompt}
            author={q.author}
            from={q.from}
          />
        ))}
      </div>
    </>
  );
};

export default ChemicalProperties; 