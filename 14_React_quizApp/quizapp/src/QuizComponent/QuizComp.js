
import React from 'react';
import { useState } from 'react';
import './quizstyle.css';


const QuizComp = () => {

    var Questionbank = [
        {
            Question: "What is capital of India?",
            AnswerText:
                [
                    { Answer: "Delhi", isCorrect: true },
                    { Answer: "Mumbai", isCorrect: false },
                    { Answer: "Ranchi", isCorrect: false },
                    { Answer: "Aurangabad", isCorrect: false }
                ]

        },

        {
            Question: "Who is the PMO India 2022?",
            AnswerText:
                [
                    { Answer: "shaha", isCorrect: false },
                    { Answer: "Modi", isCorrect: true },
                    { Answer: "Gandhi", isCorrect: false },
                    { Answer: "Singh", isCorrect: false }
                ]
        },

        {
            Question: "What is Reactjs?",
            AnswerText: [
                { Answer: "framework", isCorrect: false },
                { Answer: "libarary", isCorrect: true },
                { Answer: "book", isCorrect: false },
                { Answer: "language", isCorrect: false }
            ]
        },

        {
            Question: "MERN STAND FOR IN WEB-DEVELOPMENT?",
            AnswerText: [
                { Answer: "MongoDB Express React Node", isCorrect: true },
                { Answer: "Express MongoDB React Node", isCorrect: false },
                { Answer: "Node MongoDB Express React", isCorrect: false },
                { Answer: "MongoDB React Express Node", isCorrect: false }
            ]
        }

    ]

    //useState Hook
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerResponse = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < Questionbank.length) {
            setCurrentQuestion(nextQuestion);
        }
        else {
            setShowScore(true);
        }
    }

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    }

    return (


        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                
                    You have scored {score} out of {Questionbank.length}
                    <div>
                        <button type="submit" onClick={resetQuiz}>Play Again!!</button>
                    </div>
                </div>
            )
                : (
                    <div>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>{currentQuestion + 1}</span>/{Questionbank.length}
                            </div>

                            <div className='question-text'>
                                {Questionbank[currentQuestion].Question}
                            </div>
                        </div>

                        <div className='answer-section'>
                            {Questionbank[currentQuestion].AnswerText.map((answer) =>
                            (
                                <button onClick={() => handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                            ))}
                        </div>
                    </div>
                )
            }

        </div>
    );
}

export default QuizComp;