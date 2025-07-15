import React, { useState, useEffect } from "react";
import QuestionTemplate from "../../components/QuestionTemplate";
import SearchAndFilter from "../../components/SearchAndFilter";
import { getQuestionsByIds } from "../../data/questions";
import BackButton from "../../components/BackButton";

const AtomicStructure: React.FC = () => {
  const [filteredQuestions, setFilteredQuestions] = useState<any[]>([]);

  // Reference all Atomic Structure questions by their IDs
  const questionIds = [
    "sub-part-1", 
    "sub-part-2", 
    "elec-config-1", 
    "elec-config-2",
    "atomic-structure-4",
    "atomic-structure-5", 
    "atomic-structure-6",
    "atomic-structure-7",
    "atomic-structure-8",
    "atomic-structure-9",
    "atomic-structure-10",
    "atomic-structure-12"
  ];
  const questions = getQuestionsByIds(questionIds);

  useEffect(() => {
    // Update document title and meta tags for SEO
    document.title = "Atomic Structure - Chemistry Practice Questions | I Know Chemistry";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Master atomic structure with chemistry practice questions. Study subatomic particles, protons, neutrons, electrons, electronic configuration, and energy levels. Perfect for high school chemistry students.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Master atomic structure with chemistry practice questions. Study subatomic particles, protons, neutrons, electrons, electronic configuration, and energy levels. Perfect for high school chemistry students.';
      document.head.appendChild(newMetaDescription);
    }

    // Add keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = 'atomic structure, subatomic particles, protons neutrons electrons, electronic configuration, energy levels, chemistry atomic structure, high school chemistry atomic structure, atomic structure practice questions';
      document.head.appendChild(newMetaKeywords);
    }

    // Add Open Graph meta tags for social media
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      const newOgTitle = document.createElement('meta');
      newOgTitle.setAttribute('property', 'og:title');
      newOgTitle.content = 'Atomic Structure - Chemistry Practice Questions';
      document.head.appendChild(newOgTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      const newOgDescription = document.createElement('meta');
      newOgDescription.setAttribute('property', 'og:description');
      newOgDescription.content = 'Practice questions on atomic structure, subatomic particles, and electronic configuration. Perfect for high school chemistry students.';
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
      <BackButton borderColor="#422675" />
      {/* Colored bar below header, unique to this page */}
      <div style={{ height: "30vh", width: "100vw", background: "#673AB7" }} />
      <div
        style={{
          backgroundColor: "#673AB7",
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
        <h2 style={{ margin: "0rem 0 1.5rem 0" }}>Atomic Structure</h2>
        
        {/* Search and Filter Component */}
        <SearchAndFilter 
          questions={questions}
          onFilteredQuestionsChange={setFilteredQuestions}
          questionTemplateColor="#422675"
        />

        {/* Filtered Questions */}
        {filteredQuestions.map((q, index) => (
          <QuestionTemplate
            key={q.id}
            question={q.question}
            backgroundColor="#422675"
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

export default AtomicStructure;