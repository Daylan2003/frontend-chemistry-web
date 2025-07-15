import React, { useState, useEffect } from "react";
import QuestionTemplate from "../../components/QuestionTemplate";
import SearchAndFilter from "../../components/SearchAndFilter";
import { getQuestionsByIds } from "../../data/questions";
import BackButton from "../../components/BackButton";

const GasesAndGasLaws: React.FC = () => {
  const [filteredQuestions, setFilteredQuestions] = useState<any[]>([]);

  // Reference all Gases and Gas Laws questions by their IDs
  const questionIds = ["properties-gases-1", "properties-gases-2", "boyles-charles-1", "boyles-charles-2"];
  const questions = getQuestionsByIds(questionIds);

  useEffect(() => {
    // Update document title and meta tags for SEO
    document.title = "Gases and Gas Laws - Boyle's & Charles' Law Practice Questions | I Know Chemistry";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Master gases and gas laws with chemistry practice questions. Study Boyle\'s law, Charles\' law, gas properties, pressure, volume, and temperature relationships. Perfect for high school chemistry students.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Master gases and gas laws with chemistry practice questions. Study Boyle\'s law, Charles\' law, gas properties, pressure, volume, and temperature relationships. Perfect for high school chemistry students.';
      document.head.appendChild(newMetaDescription);
    }

    // Add keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = 'gases and gas laws, Boyle\'s law, Charles\' law, gas properties, pressure volume temperature, ideal gas law, chemistry gas laws practice, high school chemistry gas laws';
      document.head.appendChild(newMetaKeywords);
    }

    // Add Open Graph meta tags for social media
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      const newOgTitle = document.createElement('meta');
      newOgTitle.setAttribute('property', 'og:title');
      newOgTitle.content = 'Gases and Gas Laws - Boyle\'s & Charles\' Law Practice Questions';
      document.head.appendChild(newOgTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      const newOgDescription = document.createElement('meta');
      newOgDescription.setAttribute('property', 'og:description');
      newOgDescription.content = 'Practice questions on gases, Boyle\'s law, Charles\' law, and gas properties. Perfect for high school chemistry students.';
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
      <BackButton borderColor="#358b96" />
      <div style={{ height: "30vh", width: "100vw", background: "#4DD0E1" }} />
      <div
        style={{
          backgroundColor: "#4DD0E1",
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
        <h2 style={{ margin: "0rem 0 1.5rem 0" }}>Gases and Gas Laws</h2>
        
        {/* Search and Filter Component */}
        <SearchAndFilter 
          questions={questions}
          onFilteredQuestionsChange={setFilteredQuestions}
          questionTemplateColor="#358b96"
        />

        {/* Filtered Questions */}
        {filteredQuestions.map((q, index) => (
          <QuestionTemplate
            key={q.id}
            question={q.question}
            backgroundColor="#358b96"
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

export default GasesAndGasLaws;