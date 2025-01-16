import { useState } from "react";

// Example C++ cybersecurityQuestions and answers
const cybersecurityQuestions = [
  {
    id: 1,
    question: "What is the primary purpose of a firewall in cybersecurity?",
    options: [
      "To detect malware",
      "To monitor network traffic",
      "To prevent unauthorized access to or from a private network",
      "To encrypt data",
    ],
    correctAnswer:
      "To prevent unauthorized access to or from a private network",
  },
  {
    id: 2,
    question:
      "Which of the following is a common type of social engineering attack?",
    options: [
      "SQL Injection",
      "Phishing",
      "Cross-Site Scripting (XSS)",
      "Man-in-the-Middle (MITM)",
    ],
    correctAnswer: "Phishing",
  },
  {
    id: 3,
    question: "What does the term 'zero-day vulnerability' refer to?",
    options: [
      "A vulnerability that has been patched but is still exploited",
      "A security vulnerability that is exploited before the vendor releases a fix",
      "A vulnerability found after a software's release",
      "A vulnerability that occurs when no updates are available",
    ],
    correctAnswer:
      "A security vulnerability that is exploited before the vendor releases a fix",
  },
  {
    id: 4,
    question:
      "Which protocol is commonly used to securely encrypt data between a web server and a browser?",
    options: ["HTTP", "HTTPS", "FTP", "Telnet"],
    correctAnswer: "HTTPS",
  },
  {
    id: 5,
    question:
      "Which of the following is used for penetration testing in cybersecurity?",
    options: ["Wireshark", "Nessus", "Metasploit", "Snort"],
    correctAnswer: "Metasploit",
  },
];

const Cybersecurity = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleNextQuestion = () => {
    if (
      selectedAnswer ===
      cybersecurityQuestions[currentQuestionIndex].correctAnswer
    ) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < cybersecurityQuestions.length - 1) {
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
              Your score: {score} / {cybersecurityQuestions.length}
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
              {cybersecurityQuestions[currentQuestionIndex].question}
            </h5>

            <div className="form-check">
              {cybersecurityQuestions[currentQuestionIndex].options.map(
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

export default Cybersecurity;
