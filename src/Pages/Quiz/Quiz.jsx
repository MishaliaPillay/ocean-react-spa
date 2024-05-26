import React, { useState } from "react";
import quizData from "../../Data/Questions.json";
import "./Quiz.css";
import { ArrowCircleLeft } from "@phosphor-icons/react";
const Quiz = () => {
  const [sectionIndex, setSectionIndex] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const startQuiz = (index) => {
    setSectionIndex(index);
    setQuestionIndex(0);
    setUserAnswers([]);
    setSelectedOption("");
    setShowExplanation(false);
    setShowResults(false);
  };

  const handleOptionSelect = (option) => {
    if (!selectedOption) {
      setSelectedOption(option);
      setShowExplanation(true);
    }
  };

  const handleNextQuestion = () => {
    setUserAnswers([...userAnswers, selectedOption]);
    setSelectedOption("");
    setShowExplanation(false);
    const currentSection =
      quizData.questions[0][Object.keys(quizData.questions[0])[sectionIndex]];
    if (questionIndex < currentSection.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBackToSections = () => {
    setSectionIndex(null);
    setQuestionIndex(0);
    setSelectedOption("");
    setUserAnswers([]);
    setShowExplanation(false);
    setShowResults(false);
  };

  const renderQuestion = () => {
    const currentSection =
      quizData.questions[0][Object.keys(quizData.questions[0])[sectionIndex]];
    const currentQuestion = currentSection[questionIndex];

    return (
      <div className={`question-container ${selectedOption ? "no-hover" : ""}`}>
        <h3>{currentQuestion.question}</h3>
        <ul>
          {currentQuestion.options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionSelect(option)}
              className={`${
                selectedOption === option ? "selected-answer" : ""
              } ${selectedOption ? "no-hover" : ""}`}
            >
              <button disabled={selectedOption !== ""}>{option}</button>
            </li>
          ))}
        </ul>
        {showExplanation && (
          <div className="explanation">
            {selectedOption === currentQuestion.answer ? (
              <p>Correct!</p>
            ) : (
              <p>Incorrect. {currentQuestion.explanation}</p>
            )}
          </div>
        )}
        <button
          className="facts"
          onClick={handleNextQuestion}
          disabled={!selectedOption}
        >
          Next Question
        </button>
      </div>
    );
  };

  const renderResults = () => {
    const currentSection =
      quizData.questions[0][Object.keys(quizData.questions[0])[sectionIndex]];

    return (
      <div className="results-container">
        <h2>Quiz Results</h2>
        {userAnswers.map((answer, index) => (
          <div key={index}>
            <p className="heading">
              Question {index + 1}:{" "}
              {answer === currentSection[index].answer
                ? "Correct"
                : "Incorrect"}
            </p>
            {answer !== currentSection[index].answer && (
              <p>{currentSection[index].explanation}</p>
            )}
          </div>
        ))}
        <button className="back-button" onClick={handleBackToSections}>
          Back to Sections
        </button>
      </div>
    );
  };

  const renderSectionCards = () => {
    return Object.keys(quizData.questions[0]).map((sectionKey, index) => (
      <div className="section-card" key={index}>
        <h2>{sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)}</h2>
        <button className="facts" onClick={() => startQuiz(index)}>
          {`Start ${sectionKey} Quiz`}
        </button>
      </div>
    ));
  };

  return (
    <div className="quiz-container">
      {sectionIndex === null && (
        <>
          <h1 className="heading">Choose a Section to Start Quiz</h1>
          <div className="section-container">{renderSectionCards()}</div>
        </>
      )}
      {sectionIndex !== null && !showResults && (
        <>
          <button className="factsBack" onClick={handleBackToSections}> <ArrowCircleLeft size={30} />
            Back to Sections
          </button>
          {renderQuestion()}
        </>
      )}
      {showResults && (
        <>
          <button className="facts" onClick={handleBackToSections}>
            Back to Sections
          </button>
          {renderResults()}
        </>
      )}
    </div>
  );
};

export default Quiz;
