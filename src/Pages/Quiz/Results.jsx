import React from "react";

// Component to render quiz results
const Results = ({
  quizData, // The quiz data containing all the Q&A
  sectionIndex, // The index of the current quiz section
  userAnswers, // Array of answers selected by  user
  handleBackToSections, // Function to navigate back to the section selection view
}) => {
  // Extract the current section questions using the section index
  const currentSection =
    quizData.questions[0][Object.keys(quizData.questions[0])[sectionIndex]];

  return (
    <section className="results-container">
      <h2>Quiz Results</h2>

      {/* Iterate over user answers to display each question result */}
      {userAnswers.map((answer, index) => (
        <section key={index}>
          <p className="heading">
            Question {index + 1}:{" "}
            {answer === currentSection[index].answer ? "Correct" : "Incorrect"}
          </p>

          {/* If the user's answer was incorrect, display the correct answer explanation */}
          {answer !== currentSection[index].answer && (
            <p>{currentSection[index].explanation}</p>
          )}
        </section>
      ))}
    </section>
  );
};

export default Results;
