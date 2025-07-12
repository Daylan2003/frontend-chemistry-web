import React, { useState, useEffect } from "react";
import QuestionTemplate from "../../components/QuestionTemplate";
import SearchAndFilter from "../../components/SearchAndFilter";
import { getQuestionsByIds } from "../../data/questions";

const GroupsAndPeriods: React.FC = () => {
  const [filteredQuestions, setFilteredQuestions] = useState<any[]>([]);

  // Reference questions by their IDs
  const questionIds = ["groups-periods-1", "groups-periods-2"];
  const questions = getQuestionsByIds(questionIds);

  useEffect(() => {
    // Initial filtering (optional)
    setFilteredQuestions(questions);
  }, [questions]);

  return (
    <>
      {/* Colored bar below header, unique to this page */}
      <div style={{ height: "30vh", width: "100vw", background: "#00BCD4" }} />
      <div
        style={{
          backgroundColor: "#00BCD4",
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
        <h2 style={{ margin: "0rem 0 1.5rem 0" }}>Groups and Periods</h2>

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
            backgroundColor="#00BCD4"
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

export default GroupsAndPeriods;
