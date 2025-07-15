import React, { useState } from "react";
import QuestionTemplate from "../components/QuestionTemplate";
import SearchAndFilter from "../components/SearchAndFilter";
import { getAllQuestions } from "../data/questions";
import BackButton from "../components/BackButton";

const QuestionBank: React.FC = () => {
  const [filteredQuestions, setFilteredQuestions] = useState<any[]>([]);

  // Get all questions for the question bank
  const questions = getAllQuestions();

  return (
    <>
      <BackButton borderColor="#337a36" />
      {/* Colored bar below header, unique to this page */}
      <div style={{ height: "30vh", width: "100vw", background: "#4CAF50" }} />
      <div
        style={{
          backgroundColor: "#4CAF50",
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
        <h2 style={{ margin: "0rem 0 1.5rem 0" }}>Question Bank</h2>
        
        {/* Search and Filter Component */}
        <SearchAndFilter 
          questions={questions}
          onFilteredQuestionsChange={setFilteredQuestions}
          questionTemplateColor="#337a36"
        />

        {/* Filtered Questions */}
        {filteredQuestions.map((q, index) => (
          <QuestionTemplate
            key={q.id}
            question={q.question}
            backgroundColor="#337a36"
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

export default QuestionBank; 