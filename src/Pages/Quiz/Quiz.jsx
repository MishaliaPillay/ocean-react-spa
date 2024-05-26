import React, { useState } from "react";
import quizData from "../../Data/Questions.json";
import "./Quiz.css";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import SectionCards from "./SectionCards";
import Question from "./Question";
import Results from "./Results";

const Quiz = () => {
  // State variables to manage quiz state
  const [sectionIndex, setSectionIndex] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Function to start the quiz for a given section
  const startQuiz = (index) => {
    setSectionIndex(index);
    setQuestionIndex(0);
    setUserAnswers([]);
    setSelectedOption("");
    setShowExplanation(false);
    setShowResults(false);
  };

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    if (!selectedOption) {
      setSelectedOption(option);
      setShowExplanation(true);
    }
  };

  // Function to handle advancing to the next question
  const handleNextQuestion = () => {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedOption]);
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

  // Function to return to the section selection view
  const handleBackToSections = () => {
    setSectionIndex(null);
    setQuestionIndex(0);
    setSelectedOption("");
    setUserAnswers([]);
    setShowExplanation(false);
    setShowResults(false);
  };

  // Main component render logic
  return (
    <section className="quiz-container">
      {sectionIndex === null && (
        <>
          <h1 className="heading">Choose a Section to Start Quiz</h1>
          <section className="section-container">
            <SectionCards quizData={quizData} startQuiz={startQuiz} />
          </section>
        </>
      )}
      {sectionIndex !== null && !showResults && (
        <>
          <button className="factsBack" onClick={handleBackToSections}>
            <ArrowCircleLeft size={30} />
            Back to Sections
          </button>
          <Question
            quizData={quizData}
            sectionIndex={sectionIndex}
            questionIndex={questionIndex}
            selectedOption={selectedOption}
            handleOptionSelect={handleOptionSelect}
            showExplanation={showExplanation}
            handleNextQuestion={handleNextQuestion}
          />
        </>
      )}
      {showResults && (
        <>
          <button className="facts" onClick={handleBackToSections}>
            <ArrowCircleLeft size={30} />
            Back to Sections
          </button>
          <Results
            quizData={quizData}
            sectionIndex={sectionIndex}
            userAnswers={userAnswers}
            handleBackToSections={handleBackToSections}
          />
        </>
      )}
    </section>
  );
};

export default Quiz;
