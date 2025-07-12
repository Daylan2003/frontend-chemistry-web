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
  const [filterBy, setFilterBy] = useState("author");
  const [filterValue, setFilterValue] = useState("");
  const [tags, setTags] = useState<{type: string, value: string}[]>([]);

  const handleAddTag = () => {
    if (filterValue.trim() && !tags.some(tag => tag.type === filterBy && tag.value === filterValue.trim())) {
      setTags([...tags, {type: filterBy, value: filterValue.trim()}]);
      setFilterValue("");
    }
  };

  const handleRemoveTag = (tagToRemove: {type: string, value: string}) => {
    setTags(tags.filter(tag => !(tag.type === tagToRemove.type && tag.value === tagToRemove.value)));
  };

  const getFilterTypeLabel = (type: string) => {
    switch (type) {
      case "author": return "By Author:";
      case "from": return "By From:";
      case "difficulty": return "By Difficulty:";
      case "id": return "By ID:";
      default: return "By Question:";
    }
  };

  React.useEffect(() => {
    const filteredQuestions = questions.filter(q => {
      const searchMatch = q.question.toLowerCase().includes(searchTerm.toLowerCase());
      
      if (tags.length === 0) {
        // Only apply search if no tags exist
        onFilteredQuestionsChange(searchMatch ? questions.filter(q => q.question.toLowerCase().includes(searchTerm.toLowerCase())) : []);
        return searchMatch;
      }
      
      // Check if any tag matches the filter criteria based on the tag type
      const tagMatches = tags.some(tag => {
        switch (tag.type) {
          case "author":
            return q.author.toLowerCase().includes(tag.value.toLowerCase());
          case "from":
            return q.from.toLowerCase().includes(tag.value.toLowerCase());
          case "difficulty":
            return q.difficulty.toLowerCase().includes(tag.value.toLowerCase());
          case "id":
            return q.id.toLowerCase().includes(tag.value.toLowerCase());
          default:
            return q.question.toLowerCase().includes(tag.value.toLowerCase());
        }
      });
      
      return searchMatch && tagMatches;
    });

    onFilteredQuestionsChange(filteredQuestions);
  }, [searchTerm, tags, questions, onFilteredQuestionsChange]);

  return (
    <div style={{ 
      marginBottom: "2rem", 
      width: "100%", 
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }}>
      {/* Search and Filter Row */}
      <div style={{ 
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

        {/* Filter Controls */}
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
              <option value="author">By Author</option>
              <option value="from">By From</option>
              <option value="difficulty">By Difficulty</option>
              <option value="id">By ID</option>
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

          {/* Green Checkmark Button */}
          <div style={{ width: "50px", margin: "0" }}>
            <button
              onClick={handleAddTag}
              style={{
                width: "100%",
                height: "100%",
                padding: "0.75rem",
                borderRadius: "0 12px 12px 0",
                border: "2px solid #4caf50",
                fontSize: "1rem",
                backgroundColor: "#4caf50",
                color: "white",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              ✓
            </button>
          </div>
        </div>
      </div>

      {/* Tags Display */}
      {tags.length > 0 && (
        <div style={{ 
          display: "flex", 
          flexDirection: "column",
          gap: "0.5rem" 
        }}>
          {["author", "from", "difficulty", "id"].map(filterType => {
            const typeTags = tags.filter(tag => tag.type === filterType);
            if (typeTags.length === 0) return null;
            
            return (
              <div key={filterType} style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center" }}>
                <span style={{ 
                  fontWeight: "bold", 
                  color: "white", 
                  marginRight: "0.5rem",
                  minWidth: "80px"
                }}>
                  {getFilterTypeLabel(filterType)}
                </span>
                {typeTags.map((tag, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#e8f5e8",
                      border: "1px solid #4caf50",
                      borderRadius: "20px",
                      padding: "0.5rem 1rem",
                      fontSize: "0.9rem",
                      color: "#2e7d32",
                    }}
                  >
                    <span>{tag.value}</span>
                    <button
                      onClick={() => handleRemoveTag(tag)}
                      style={{
                        marginLeft: "0.5rem",
                        background: "none",
                        border: "none",
                        color: "#2e7d32",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        padding: "0",
                        width: "20px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter; 