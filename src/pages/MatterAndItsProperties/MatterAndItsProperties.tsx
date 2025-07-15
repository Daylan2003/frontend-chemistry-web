import React, { useState, useEffect } from "react";
import QuestionTemplate from "../../components/QuestionTemplate";
import SearchAndFilter from "../../components/SearchAndFilter";
import { getQuestionsByIds } from "../../data/questions";
import BackButton from "../../components/BackButton";

const MatterAndItsProperties: React.FC = () => {
  const [filteredQuestions, setFilteredQuestions] = useState<any[]>([]);

  // Reference all Matter and Its Properties questions by their IDs
  const questionIds = [
    "def-matter-1", 
    "def-matter-2", 
    "def-matter-3", 
    "def-matter-4", 
    "def-matter-5", 
    "def-matter-6", 
    "def-matter-8", 
    "def-matter-10", 
    "chem-props-1", 
    "chem-props-2"
  ];
  const questions = getQuestionsByIds(questionIds);

  useEffect(() => {
    // Update document title and meta tags for SEO
    document.title = "Matter and Its Properties - Chemistry Practice Questions | I Know Chemistry";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about matter and its properties with chemistry practice questions. Study states of matter, chemical properties, physical changes, and chemical changes. Perfect for high school chemistry students.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Learn about matter and its properties with chemistry practice questions. Study states of matter, chemical properties, physical changes, and chemical changes. Perfect for high school chemistry students.';
      document.head.appendChild(newMetaDescription);
    }

    // Add keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = 'matter and its properties, states of matter, chemical properties, physical changes, chemical changes, chemistry matter questions, high school chemistry matter, chemistry properties practice';
      document.head.appendChild(newMetaKeywords);
    }

    // Add Open Graph meta tags for social media
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      const newOgTitle = document.createElement('meta');
      newOgTitle.setAttribute('property', 'og:title');
      newOgTitle.content = 'Matter and Its Properties - Chemistry Practice Questions';
      document.head.appendChild(newOgTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      const newOgDescription = document.createElement('meta');
      newOgDescription.setAttribute('property', 'og:description');
      newOgDescription.content = 'Practice questions on matter, states of matter, and chemical properties. Perfect for high school chemistry students.';
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
      <BackButton borderColor="#423838" />
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
        <h2 style={{ margin: "0rem 0 1.5rem 0" }}>Matter and Its Properties</h2>
        
        {/* Search and Filter Component */}
        <SearchAndFilter 
          questions={questions}
          onFilteredQuestionsChange={setFilteredQuestions}
          questionTemplateColor="#423838"
        />

        {/* Filtered Questions */}
        {filteredQuestions.map((q, index) => (
          <QuestionTemplate
            key={q.id}
            question={q.question}
            backgroundColor="#423838"
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

export default MatterAndItsProperties;