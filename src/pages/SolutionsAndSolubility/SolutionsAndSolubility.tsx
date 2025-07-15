import React, { useState, useEffect } from "react";
import QuestionTemplate from "../../components/QuestionTemplate";
import SearchAndFilter from "../../components/SearchAndFilter";
import { getQuestionsByIds } from "../../data/questions";
import BackButton from "../../components/BackButton";

const SolutionsAndSolubility: React.FC = () => {
  const [filteredQuestions, setFilteredQuestions] = useState<any[]>([]);

  // Reference all Solutions and Solubility questions by their IDs
  const questionIds = ["components-solution-1", "components-solution-2", "solubility-factors-1", "solubility-factors-2"];
  const questions = getQuestionsByIds(questionIds);

  useEffect(() => {
    // Update document title and meta tags for SEO
    document.title = "Solutions and Solubility - Solute Solvent Practice Questions | I Know Chemistry";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Master solutions and solubility with chemistry practice questions. Study solute, solvent, solubility factors, concentration, and solution properties. Perfect for high school chemistry students.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Master solutions and solubility with chemistry practice questions. Study solute, solvent, solubility factors, concentration, and solution properties. Perfect for high school chemistry students.';
      document.head.appendChild(newMetaDescription);
    }

    // Add keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = 'solutions and solubility, solute solvent, solubility factors, concentration, solution properties, chemistry solutions practice, high school chemistry solutions';
      document.head.appendChild(newMetaKeywords);
    }

    // Add Open Graph meta tags for social media
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      const newOgTitle = document.createElement('meta');
      newOgTitle.setAttribute('property', 'og:title');
      newOgTitle.content = 'Solutions and Solubility - Solute Solvent Practice Questions';
      document.head.appendChild(newOgTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      const newOgDescription = document.createElement('meta');
      newOgDescription.setAttribute('property', 'og:description');
      newOgDescription.content = 'Practice questions on solutions, solubility, solute, solvent, and concentration. Perfect for high school chemistry students.';
      document.head.appendChild(newOgDescription);
    }

    const ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      const newOgType = document.createElement('meta');
      newOgType.setAttribute('property', 'og:type');
      newOgType.content = 'website';
      document.head.appendChild(newOgType);
    }

    // Add canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      const newCanonical = document.createElement('link');
      newCanonical.rel = 'canonical';
      newCanonical.href = window.location.href;
      document.head.appendChild(newCanonical);
    }

  }, []);

  return (
    <>
      <BackButton borderColor="#2980b9" />
      <div style={{ height: "30vh", width: "100vw", background: "#2980b9" }} />
      <div
        style={{
          backgroundColor: "#2980b9",
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
        <h2 style={{ margin: "0rem 0 1.5rem 0" }}>Solutions and Solubility</h2>
        
        {/* Search and Filter Component */}
        <SearchAndFilter 
          questions={questions}
          onFilteredQuestionsChange={setFilteredQuestions}
          questionTemplateColor="#2980b9"
        />

        {/* Filtered Questions */}
        {filteredQuestions.map((q, index) => (
          <QuestionTemplate
            key={q.id}
            question={q.question}
            backgroundColor="#2980b9"
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

export default SolutionsAndSolubility;