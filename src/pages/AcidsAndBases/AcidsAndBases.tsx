import React, { useState } from "react";
import QuestionTemplate from "../../components/QuestionTemplate";
import SearchAndFilter from "../../components/SearchAndFilter";
import { getQuestionsByIds } from "../../data/questions";

const AcidsAndBases: React.FC = () => {
  const [filteredQuestions, setFilteredQuestions] = useState<any[]>([]);

  // Reference all Acids and Bases questions by their IDs
  const questionIds = ["acids-bases-1", "acids-bases-2", "acids-bases-3", "acids-bases-reactions-1"];
  const questions = getQuestionsByIds(questionIds);

  return (
    <>
      <div style={{ height: "30vh", width: "100vw", background: "#009688" }} />
      <div
        style={{
          backgroundColor: "#009688",
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
        <h2 style={{ margin: "0rem 0 1.5rem 0" }}>Acids and Bases</h2>
        
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
            backgroundColor="#009688"
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

export default AcidsAndBases;