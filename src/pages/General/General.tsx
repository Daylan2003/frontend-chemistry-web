import React, { useState, useEffect } from "react";
import QuestionTemplate from "../../components/QuestionTemplate";

const General: React.FC = () => {
  const [filteredQuestions, setFilteredQuestions] = useState<any[]>([]);

  // Embedded question data directly in the component
  const questions = [
    {
      id: "general-question-1",
      question: "Ask any Question you like and the AI will answer",
      prompt: "Answer the student's chemistry question directly with detailed chemical concepts, formulas, and explanations. Use proper chemical terminology and notation. Provide step-by-step explanations when appropriate. Do not engage in conversation or acknowledge the question format - just provide the chemistry answer.",
      author: "Chemistry Tutor",
      from: "Daylan - Website Creator",
      questionNumber: 1
    }
  ];

  useEffect(() => {
    // Update document title and meta tags for SEO
    document.title = "General Chemistry Questions - Practice & Study | I Know Chemistry";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore general chemistry questions and practice problems. Study atomic structure, chemical bonding, reactions, stoichiometry, and more chemistry topics. Perfect for high school chemistry students.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Explore general chemistry questions and practice problems. Study atomic structure, chemical bonding, reactions, stoichiometry, and more chemistry topics. Perfect for high school chemistry students.';
      document.head.appendChild(newMetaDescription);
    }

    // Add keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = 'general chemistry, chemistry practice questions, chemistry study, chemistry problems, high school chemistry, chemistry topics, chemistry practice';
      document.head.appendChild(newMetaKeywords);
    }

    // Add Open Graph meta tags for social media
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      const newOgTitle = document.createElement('meta');
      newOgTitle.setAttribute('property', 'og:title');
      newOgTitle.content = 'General Chemistry Questions - Practice & Study';
      document.head.appendChild(newOgTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      const newOgDescription = document.createElement('meta');
      newOgDescription.setAttribute('property', 'og:description');
      newOgDescription.content = 'Practice general chemistry questions and study various chemistry topics. Perfect for high school chemistry students.';
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

    // Set filtered questions to all questions initially
    setFilteredQuestions(questions);

  }, []);

  return (
    <>
      <div style={{ height: "30vh", width: "100vw", background: "#007BFF" }} />
      <div
        style={{
          backgroundColor: "#007BFF",
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
        <h2 style={{ margin: "0rem 0 1.5rem 0" }}>General Chemistry</h2>
        
        {/* Filtered Questions */}
        {filteredQuestions.map((q, index) => (
          <QuestionTemplate
            key={q.id}
            question={q.question}
            backgroundColor="#054c99"
            prompt={q.prompt}
            author={q.author}
            from={q.from}
            questionNumber={q.questionNumber}
            id={q.id}
            isGeneralQuestion={true}
          />
        ))}
      </div>
    </>
  );
};

export default General;
