import React, { useEffect } from "react";
import NavButton from "../components/NavButton";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Update document title and meta tags for SEO
    document.title = "I Know Chemistry - Free Chemistry Practice Questions & AI-Powered Learning";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Master chemistry with I Know Chemistry! Free practice questions for high school students. human refined, AI-powered feedback, searchable by topic, difficulty, and author. Perfect for exam prep and understanding chemistry concepts.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Master chemistry with I Know Chemistry! Free practice questions for high school students. AI-powered feedback, searchable by topic, difficulty, and author. Perfect for exam prep and understanding chemistry concepts.';
      document.head.appendChild(newMetaDescription);
    }

    // Add keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = 'chemistry practice questions, high school chemistry, chemistry exam prep, atomic structure, periodic table, chemical bonding, chemical reactions, acids and bases, stoichiometry, laboratory work, chemistry learning, free chemistry resources, AI chemistry tutor';
      document.head.appendChild(newMetaKeywords);
    }

    // Add Open Graph meta tags for social media
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      const newOgTitle = document.createElement('meta');
      newOgTitle.setAttribute('property', 'og:title');
      newOgTitle.content = 'I Know Chemistry - Free Chemistry Practice Questions & AI-Powered Learning';
      document.head.appendChild(newOgTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      const newOgDescription = document.createElement('meta');
      newOgDescription.setAttribute('property', 'og:description');
      newOgDescription.content = 'Master chemistry with free practice questions, AI-powered feedback, and comprehensive topic coverage. Perfect for high school students and exam preparation.';
      document.head.appendChild(newOgDescription);
    }

    const ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      const newOgType = document.createElement('meta');
      newOgType.setAttribute('property', 'og:type');
      newOgType.content = 'website';
      document.head.appendChild(newOgType);
    }

    // Add Twitter Card meta tags
    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      const newTwitterCard = document.createElement('meta');
      newTwitterCard.name = 'twitter:card';
      newTwitterCard.content = 'summary_large_image';
      document.head.appendChild(newTwitterCard);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      const newTwitterTitle = document.createElement('meta');
      newTwitterTitle.name = 'twitter:title';
      newTwitterTitle.content = 'I Know Chemistry - Free Chemistry Practice Questions';
      document.head.appendChild(newTwitterTitle);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      const newTwitterDescription = document.createElement('meta');
      newTwitterDescription.name = 'twitter:description';
      newTwitterDescription.content = 'Master chemistry with AI-powered practice questions. Perfect for high school students and exam preparation.';
      document.head.appendChild(newTwitterDescription);
    }

    // Add canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      const newCanonical = document.createElement('link');
      newCanonical.rel = 'canonical';
      newCanonical.href = window.location.origin;
      document.head.appendChild(newCanonical);
    }

    // Add language meta tag
    const lang = document.querySelector('meta[http-equiv="content-language"]');
    if (!lang) {
      const newLang = document.createElement('meta');
      newLang.setAttribute('http-equiv', 'content-language');
      newLang.content = 'en';
      document.head.appendChild(newLang);
    }

    // Add author meta tag
    const author = document.querySelector('meta[name="author"]');
    if (!author) {
      const newAuthor = document.createElement('meta');
      newAuthor.name = 'author';
      newAuthor.content = 'I Know Chemistry';
      document.head.appendChild(newAuthor);
    }

    // Add robots meta tag
    const robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      const newRobots = document.createElement('meta');
      newRobots.name = 'robots';
      newRobots.content = 'index, follow';
      document.head.appendChild(newRobots);
    }

  }, []);

  return (
    <div
      style={{
        backgroundColor: "red",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      {/* General Questions button centered, 2:1 ratio, between header and grid */}
      <div className="general-button-container">
        <NavButton
          label="General Questions"
          to="/general"
          color="#007BFF"
          navigate={navigate}
          style={{ aspectRatio: "4 / 1", maxWidth: "600px", minWidth: 0, minHeight: 0 }}
        />

      </div>
      <div className="button-grid">
        <NavButton
          label="Matter and Its Properties"
          to="/matter-and-its-properties"
          color="#607D8B"
          navigate={navigate}
        />
        <NavButton
          label="Atomic Structure"
          to="/atomic-structure"
          color="#673AB7"
          navigate={navigate}
        />
        <NavButton
          label="Periodic Table"
          to="/periodic-table"
          color="#00BCD4"
          navigate={navigate}
        />
        <NavButton
          label="Chemical Bonding"
          to="/chemical-bonding"
          color="#3F51B5"
          navigate={navigate}
        />
        <NavButton
          label="Chemical Reactions"
          to="/chemical-reactions"
          color="#FF5722"
          navigate={navigate}
        />
        <NavButton
          label="Mole Concept and Stoichiometry"
          to="/mole-concept-and-stoichiometry"
          color="#FFC107"
          navigate={navigate}
        />
        <NavButton
          label="Acids and Bases"
          to="/acids-and-bases"
          color="#009688"
          navigate={navigate}
        />
        <NavButton
          label="Gases and Gas Laws"
          to="/gases-and-gas-laws"
          color="#4DD0E1"
          navigate={navigate}
        />
        <NavButton
          label="Solutions and Solubility"
          to="/solutions-and-solubility"
          color="#2980b9"
          navigate={navigate}
        />
        <NavButton
          label="Laboratory Work"
          to="/laboratory-work"
          color="#388E3C"
          navigate={navigate}
        />
      </div>
      {/* Coloured div of size 32px under everything */}
      <div style={{ width: "100%", height: 128, background: "red" }} />
    </div>
  );
};

export default HomePage;