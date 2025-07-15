import React, { useState } from "react";

interface Question {
  id: string;
  question: string;
  prompt: string;
  author: string;
  from: string;
  difficulty: string;
  questionNumber: number;
  subSection: string;
}

interface SearchAndFilterProps {
  questions: Question[];
  onFilteredQuestionsChange: (filteredQuestions: Question[]) => void;
  questionTemplateColor?: string;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ questions, onFilteredQuestionsChange, questionTemplateColor = "#009688" }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("author");
  const [filterValue, setFilterValue] = useState("");
  const [sectionFilter, setSectionFilter] = useState("");
  const [tags, setTags] = useState<{type: string, value: string}[]>([]);
  const [isHowItWorksExpanded, setIsHowItWorksExpanded] = useState(false);

  const handleAddTag = () => {
    if (filterValue.trim() && !tags.some(tag => tag.type === filterBy && tag.value === filterValue.trim())) {
      setTags([...tags, {type: filterBy, value: filterValue.trim()}]);
      setFilterValue("");
    }
  };

  const handleAddSectionTag = () => {
    if (sectionFilter.trim() && !tags.some(tag => tag.type === "section" && tag.value === sectionFilter.trim())) {
      setTags([...tags, {type: "section", value: sectionFilter.trim()}]);
      setSectionFilter("");
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
      case "section": return "By Section:";
      default: return "By Question:";
    }
  };

  // Get unique sub-sections from questions
  const getUniqueSubSections = () => {
    const subSections = questions.map(q => q.subSection);
    return Array.from(new Set(subSections)).sort();
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
          case "section":
            return q.subSection.toLowerCase().includes(tag.value.toLowerCase());
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
      {/* How This Works Section */}
      <div style={{
        marginBottom: "1rem",
        width: "100%"
      }}>
        <div
          onClick={() => setIsHowItWorksExpanded(!isHowItWorksExpanded)}
          style={{
            backgroundColor: questionTemplateColor,
            border: `2px solid ${questionTemplateColor}`,
            borderRadius: "12px",
            padding: "1rem 1.5rem",
            cursor: "pointer",
            transition: "all 0.3s ease",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
            fontSize: "1.1rem",
            fontWeight: "500"
          }}
        >
          <span>How does the A.I. work?</span>
          <span style={{
            fontSize: "1.5rem",
            transition: "transform 0.3s ease",
            transform: isHowItWorksExpanded ? "rotate(180deg)" : "rotate(0deg)"
          }}>
            ▼
          </span>
        </div>
        
        {isHowItWorksExpanded && (
          <div style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "2px solid rgba(255, 255, 255, 0.2)",
            borderTop: "none",
            borderRadius: "0 0 12px 12px",
            padding: "1.5rem",
            color: "white",
            fontSize: "1rem",
            lineHeight: "1.6"
          }}>
            <div style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "8px",
              padding: "1rem",
              marginBottom: "1.5rem"
            }}>
              <h4 style={{ 
                margin: "0 0 0.5rem 0", 
                color: "#ffeb3b", 
                fontSize: "1.1rem",
                fontWeight: "600"
              }}>
                Common Misconception
              </h4>
              <p style={{ margin: "0", fontSize: "0.95rem", opacity: "0.9" }}>
                The A.I. does not work the same way as common LLM
              </p>
            </div>
            
            <p style={{ 
              margin: "0 0 1rem 0", 
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "#4caf50"
            }}>
              Instead this is how it works:
            </p>
            
            <p style={{ margin: "0 0 1rem 0" }}>
              Our AI-powered chemistry tutor uses advanced natural language processing to analyze your answers and provide personalized feedback. Here's how it works:
            </p>
            <ul style={{ margin: "0", paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Smart Analysis:</strong> The AI compares your answer against expert-written solution prompts that contain key concepts and terminology.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Personalized Feedback:</strong> You receive specific feedback on what you got right, what needs improvement, and suggestions for better understanding.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Comprehensive Review:</strong> The system checks for accuracy, completeness, and even points out any incorrect or off-topic information.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Learning Focus:</strong> Feedback is designed to help you understand concepts better, not just get the right answer.
              </li>
            </ul>
            <p style={{ margin: "1rem 0 0 0", fontSize: "0.9rem", opacity: "0.8" }}>
              Simply type your answer and click "Grade Answer" to get instant, helpful feedback from our AI chemistry tutor!
            </p>
          </div>
        )}
      </div>

      {/* Search Input */}
      <div style={{ flex: 1 }}>
        <input
          type="text"
          placeholder="Search questions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input-mobile"
          style={{
            width: "100%",
            minWidth: "200px",
            padding: "0.75rem 1rem",
            borderRadius: "12px",
            border: `2px solid ${questionTemplateColor}`,
            fontSize: "1rem",
            backgroundColor: "white",
            color: "#333",
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
          }}
        />
      </div>

      {/* Advanced Search Header */}
      <div style={{ 
        textAlign: "left", 
        marginTop: "1rem",
        marginBottom: "0.5rem"
      }}>
        <h3 style={{ 
          color: "white", 
          margin: "0",
          fontSize: "1.1rem",
          fontWeight: "500"
        }}>
          Advanced Search
        </h3>
      </div>

      {/* Filter Controls Row */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "1rem",
        flexWrap: "wrap"
      }}>
        {/* Left Filter Controls */}
        <div style={{ 
          display: "flex", 
          gap: "0"
        }}>
          {/* Filter Dropdown */}
          <div style={{ width: "150px" }}>
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "12px 0 0 12px",
                border: `2px solid ${questionTemplateColor}`,
                fontSize: "1rem",
                backgroundColor: "white",
                color: "#333",
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
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
                padding: "0.8rem 1rem",
                borderRadius: "0 12px 12px 0",
                borderLeft: "none",
                border: `2px solid ${questionTemplateColor}`,
                fontSize: "1rem",
                backgroundColor: "white",
                color: "#333",
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              }}
            />
          </div>

          {/* Green Checkmark Button */}
          <div style={{ width: "50px", margin: "0" }}>
            <button
              onClick={handleAddTag}
              style={{
                width: "100%",
                height: "97%",
                padding: "0.75rem",
                borderRadius: "0 12px 12px 0",
                border: `2px solid ${questionTemplateColor}`,
                fontSize: "1rem",
                backgroundColor: "#4caf50",
                color: "white",
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              }}
            >
              ✓
            </button>
          </div>
        </div>

        {/* Right Section Filter Controls */}
        <div style={{ 
          display: "flex", 
          gap: "0",
          marginLeft: "auto"
        }}>
          {/* Section Filter Dropdown */}
          <div style={{ width: "200px" }}>
            <select
              value={sectionFilter}
              onChange={(e) => setSectionFilter(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "12px 0 0 12px",
                border: `2px solid ${questionTemplateColor}`,
                fontSize: "1rem",
                backgroundColor: "white",
                color: "#333",
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              }}
            >
              <option value="">Select Sub-Section...</option>
              {getUniqueSubSections().map(subSection => (
                <option key={subSection} value={subSection}>
                  {subSection}
                </option>
              ))}
            </select>
          </div>

          {/* Section Filter Green Checkmark Button */}
          <div style={{ width: "50px", margin: "0" }}>
            <button
              onClick={handleAddSectionTag}
              style={{
                width: "100%",
                height: "97%",
                padding: "0.75rem",
                borderRadius: "0 12px 12px 0",
                border: `2px solid ${questionTemplateColor}`,
                borderLeft: "none",
                fontSize: "1rem",
                backgroundColor: "#4caf50",
                color: "white",
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
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
          {["author", "from", "difficulty", "id", "section"].map(filterType => {
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