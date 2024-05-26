import React from "react";

// Component to render quiz results
const Results = ({
  quizData,
  sectionIndex,
  userAnswers,
  handleBackToSections,
}) => {
  const currentSection =
    quizData.questions[0][Object.keys(quizData.questions[0])[sectionIndex]];

  return (
    <section className="results-container">
      <h2>Quiz Results</h2>
      {userAnswers.map((answer, index) => (
        <section key={index}>
          <p className="heading">
            Question {index + 1}:{" "}
            {answer === currentSection[index].answer ? "Correct" : "Incorrect"}
          </p>
          {answer !== currentSection[index].answer && (
            <p>{currentSection[index].explanation}</p>
          )}
        </section>
      ))}
      <button className="back-button" onClick={handleBackToSections}>
        Back to Sections
      </button>
    </section>
  );
};

export default Results;
