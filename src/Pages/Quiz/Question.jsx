import React from "react";

// Component to render the current question and its options
const Question = ({
  quizData,
  sectionIndex,
  questionIndex,
  selectedOption,
  handleOptionSelect,
  showExplanation,
  handleNextQuestion,
}) => {
  const currentSection =
    quizData.questions[0][Object.keys(quizData.questions[0])[sectionIndex]];
  const currentQuestion = currentSection[questionIndex];

  return (
    <section
      className={`question-container ${selectedOption ? "no-hover" : ""}`}
    >
      <h3 className="littleHeading">{currentQuestion.question}</h3>
      <ul>
        {currentQuestion.options.map((option) => (
          <li
            key={option}
            onClick={() => handleOptionSelect(option)}
            className={`${selectedOption === option ? "selected-answer" : ""} ${
              selectedOption ? "no-hover" : ""
            }`}
          >
            <button disabled={selectedOption !== ""}>{option}</button>
          </li>
        ))}
      </ul>
      {showExplanation && (
        <section className="explanation">
          {selectedOption === currentQuestion.answer ? (
            <p>Correct!</p>
          ) : (
            <p>Incorrect. {currentQuestion.explanation}</p>
          )}
        </section>
      )}
      <button
        className="facts"
        onClick={handleNextQuestion}
        disabled={!selectedOption}
      >
        Next Question
      </button>
    </section>
  );
};

export default Question;
