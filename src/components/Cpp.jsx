import { useState } from "react";

// Example C++ questions and answers
const questions = [
  {
    id: 1,
    question: "What is the size of a `char` in C++?",
    options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
    correctAnswer: "1 byte",
  },
  {
    id: 2,
    question:
      "Which of the following is the correct way to declare a pointer in C++?",
    options: ["int *ptr;", "int ptr;", "ptr* int;", "ptr = &int;"],
    correctAnswer: "int *ptr;",
  },
  {
    id: 3,
    question: "What is the default value of a `bool` variable in C++?",
    options: ["true", "false", "0", "1"],
    correctAnswer: "false",
  },
  {
    id: 4,
    question: "Which operator is used for dynamic memory allocation in C++?",
    options: ["new", "malloc", "calloc", "alloc"],
    correctAnswer: "new",
  },
  {
    id: 5,
    question: "What does `cout` stand for in C++?",
    options: [
      "Character Output",
      "Console Output",
      "Count Output",
      "Console Output Stream",
    ],
    correctAnswer: "Console Output",
  },
];

const Cpp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
    } else {
      setIsQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setScore(0);
    setIsQuizFinished(false);
  };

  return (
    <div className="container mt-5">
      {isQuizFinished ? (
        <div className="text-center">
          <div className="alert alert-success">
            <h2>Quiz Finished!</h2>
            <p>
              Your score: {score} / {questions.length}
            </p>
            <button className="btn btn-primary" onClick={handleRestartQuiz}>
              Restart Quiz
            </button>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-header">
            <h3>Question {currentQuestionIndex + 1}</h3>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              {questions[currentQuestionIndex].question}
            </h5>

            <div className="form-check">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={option}
                    name="answer"
                    value={option}
                    onChange={handleAnswerChange}
                    className="form-check-input"
                    checked={selectedAnswer === option}
                  />
                  <label htmlFor={option} className="form-check-label">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="card-footer text-center">
            <button
              className="btn btn-success"
              onClick={handleNextQuestion}
              disabled={!selectedAnswer}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cpp;
