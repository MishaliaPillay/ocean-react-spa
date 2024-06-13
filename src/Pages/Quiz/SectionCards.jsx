import React from "react";

// Component to render section cards for quiz selection
const SectionCards = ({ quizData, startQuiz }) => {
  // Each key represents a section of the quiz
  return Object.keys(quizData.questions[0]).map((sectionKey, index) => (
    <section className="section-card" key={index}>
      <h2>{sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)}</h2>
      <button className="quizButton" onClick={() => startQuiz(index)}>
        {`Start ${sectionKey} Quiz`}
      </button>
    </section>
  ));
};

export default SectionCards;
