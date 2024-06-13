import React from "react";

const Results = ({
  quizData, // the quiz data containing all the Q&A
  sectionIndex, // the index of the current quiz section
  userAnswers, // array of answers selected by  user
  handleBackToSections, // navigate back to the section selection view
}) => {
  // check current section questions using the section index
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
    </section>
  );
};

export default Results;
