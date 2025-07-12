import React, { useState } from "react";
import QuestionTemplate from "../../components/QuestionTemplate";
import SearchAndFilter from "../../components/SearchAndFilter";
import { getQuestionsByIds } from "../../data/questions";

const ElectronicConfiguration: React.FC = () => {
  const [filteredQuestions, setFilteredQuestions] = useState<any[]>([]);

  // Reference questions by their IDs
  const questionIds = ["elec-config-1", "elec-config-2"];
  const questions = getQuestionsByIds(questionIds);

  return (
    <>
      {/* Colored bar below header, unique to this page */}
      <div style={{ height: "30vh", width: "100vw", background: "#9575CD" }} />
      <div
        style={{
          backgroundColor: "#9575CD",
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
        <h2 style={{ margin: "0rem 0 1.5rem 0" }}>Electronic Configuration</h2>
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
            backgroundColor="#9575CD"
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

export default ElectronicConfiguration;
