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

  //  starts the quiz for a given section
  const startQuiz = (index) => {
    setSectionIndex(index);
    setQuestionIndex(0);
    setUserAnswers([]);
    setSelectedOption("");
    setShowExplanation(false);
    setShowResults(false);
  };

  //option selection checks wat uset picked
  const handleOptionSelect = (option) => {
    if (!selectedOption) {
      setSelectedOption(option);
      setShowExplanation(true);
    }
  };

  // Function to handle moving to the next question
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

  // to return to the section selection view
  const handleBackToSections = () => {
    setSectionIndex(null);
    setQuestionIndex(0);
    setSelectedOption("");
    setUserAnswers([]);
    setShowExplanation(false);
    setShowResults(false);
  };


  return (
    <section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#077fe8"
          fillOpacity="1"
          d="M0,96L40,117.3C80,139,160,181,240,170.7C320,160,400,96,480,64C560,32,640,32,720,74.7C800,117,880,203,960,202.7C1040,203,1120,117,1200,101.3C1280,85,1360,139,1400,165.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <section className="quiz-container">
        {sectionIndex === null && (
          <>
            <h1 className="secondHeadingg">Choose a Section to Start Quiz</h1>
            <section className="section-container">
              <SectionCards quizData={quizData} startQuiz={startQuiz} />
            </section>
          </>
        )}
        {sectionIndex !== null && !showResults && (
          <>
            <button className="quizButton" onClick={handleBackToSections}>
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
            <button className="quizButton" onClick={handleBackToSections}>
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
    </section>
  );
};

export default Quiz;
