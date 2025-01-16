import { useState } from "react";

const pythonQuestions = [
  {
    id: 1,
    question:
      "Which of the following is the correct syntax to output 'Hello World' in Python?",
    options: [
      "echo 'Hello World'",
      "print('Hello World')",
      "printf('Hello World')",
      "cout << 'Hello World'",
    ],
    correctAnswer: "print('Hello World')",
  },
  {
    id: 2,
    question: "Which keyword is used to create a function in Python?",
    options: ["def", "function", "create", "func"],
    correctAnswer: "def",
  },
  {
    id: 3,
    question: "Which of the following data types are immutable in Python?",
    options: ["list", "tuple", "set", "dictionary"],
    correctAnswer: "tuple",
  },
  {
    id: 4,
    question: "What is the result of 3**2 in Python?",
    options: ["6", "9", "33", "None of the above"],
    correctAnswer: "9",
  },
  {
    id: 5,
    question:
      "Which Python library is used for data manipulation and analysis?",
    options: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
    correctAnswer: "Pandas",
  },
];

const PythonQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleNextQuestion = () => {
    if (
      selectedAnswer === pythonQuestions[currentQuestionIndex].correctAnswer
    ) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < pythonQuestions.length - 1) {
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
              Your score: {score} / {pythonQuestions.length}
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
              {pythonQuestions[currentQuestionIndex].question}
            </h5>

            <div className="form-check">
              {pythonQuestions[currentQuestionIndex].options.map(
                (option, index) => (
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
                )
              )}
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

export default PythonQuiz;
