import React, { useState } from "react";

interface Question {
  id: string;
  question: string;
  prompt: string;
  author: string;
  from: string;
  difficulty: string;
  questionNumber: number;
}

interface SearchAndFilterProps {
  questions: Question[];
  onFilteredQuestionsChange: (filteredQuestions: Question[]) => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ questions, onFilteredQuestionsChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("question");
  const [filterValue, setFilterValue] = useState("");

  React.useEffect(() => {
    const filteredQuestions = questions.filter(q => {
      const searchMatch = q.question.toLowerCase().includes(searchTerm.toLowerCase());
      
      if (!filterValue) {
        const result = searchMatch ? [q] : [];
        onFilteredQuestionsChange(searchMatch ? questions.filter(q => q.question.toLowerCase().includes(searchTerm.toLowerCase())) : []);
        return searchMatch;
      }
      
      let filterMatch = false;
      switch (filterBy) {
        case "author":
          filterMatch = q.author.toLowerCase().includes(filterValue.toLowerCase());
          break;
        case "from":
          filterMatch = q.from.toLowerCase().includes(filterValue.toLowerCase());
          break;
        case "difficulty":
          filterMatch = q.difficulty.toLowerCase().includes(filterValue.toLowerCase());
          break;
        default:
          filterMatch = true;
      }
      
      return searchMatch && filterMatch;
    });

    onFilteredQuestionsChange(filteredQuestions);
  }, [searchTerm, filterBy, filterValue, questions, onFilteredQuestionsChange]);

  return (
    <div style={{ 
      marginBottom: "2rem", 
      width: "100%", 
      maxWidth: "800px",
      display: "flex",
      gap: "3rem",
      alignItems: "flex-end"
    }}>
      {/* Search Input */}
      <div style={{ flex: 1 }}>
        <input
          type="text"
          placeholder="Search questions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            borderRadius: "12px",
            border: "2px solid #b0bec5",
            fontSize: "1rem",
            backgroundColor: "white",
            color: "#333",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        />
      </div>

      {/* Filter Dropdown and Filter Value Input Container */}
      <div style={{ display: "flex", gap: "0" }}>
        {/* Filter Dropdown */}
        <div style={{ width: "150px" }}>
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              borderRadius: "12px 0 0 12px",
              border: "2px solid #b0bec5",
              fontSize: "1rem",
              backgroundColor: "white",
              color: "#333",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <option value="question">By Question</option>
            <option value="author">By Author</option>
            <option value="from">By From</option>
            <option value="difficulty">By Difficulty</option>
          </select>
        </div>

        {/* Filter Value Input */}
        <div style={{ width: "150px" }}>
          <input
            type="text"
            placeholder="Filter value..."
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              borderRadius: "0 12px 12px 0",
              border: "2px solid #b0bec5",
              fontSize: "1rem",
              backgroundColor: "white",
              color: "#333",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter; 