import React, { useState } from "react";
import QuestionTemplate from "../../components/QuestionTemplate";
import SearchAndFilter from "../../components/SearchAndFilter";
import { getQuestionsByIds } from "../../data/questions";

const SubatomicParticles: React.FC = () => {
  const [filteredQuestions, setFilteredQuestions] = useState<any[]>([]);

  // Reference questions by their IDs
  const questionIds = ["sub-part-1", "sub-part-2"];
  const questions = getQuestionsByIds(questionIds);

  return (
    <>
      {/* Colored bar below header, unique to this page */}
      <div style={{ height: "30vh", width: "100vw", background: "#7E57C2" }} />
      <div
        style={{
          backgroundColor: "#7E57C2",
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
        <h2 style={{ margin: "0rem 0 1.5rem 0" }}>Subatomic Particles</h2>
        
        {/* Search and Filter Component */}
        <SearchAndFilter 
          questions={questions}
          onFilteredQuestionsChange={setFilteredQuestions}
        />

        {/* Filtered Questions */}
        {filteredQuestions.map((q, index) => (
          <QuestionTemplate
            key={q.id}
            question={q.question}
            backgroundColor="#7E57C2"
            prompt={q.prompt}
            author={q.author}
            from={q.from}
            questionNumber={q.questionNumber}
            id={q.id}
          />
        ))}
      </div>
    </>
  );
};

export default SubatomicParticles;
