import React, { useState } from "react";

const QuizGame = () => {

    //creating array in that object data
    const Questionbank = [
        {
            Question: 'who is national bird of India?',
            Answers: [
                { Answer: 'peocock', isCorrect: true },
                { Answer: 'eagle', isCorrect: false },
                { Answer: 'cock', isCorrect: false },
                { Answer: 'parrot', isCorrect: false }
            ]
        },

        {
            Question: 'which is biggest festival of inida?',
            Answers: [
                { Answer: 'Holi', isCorrect: false },
                { Answer: 'Diwali', isCorrect: false },
                { Answer: 'idd', isCorrect: false },
                { Answer: '15Aug', isCorrect: true }
            ]
        },

        {
            Question: '1+2+2+5?',
            Answers: [
                { Answer: '6', isCorrect: false },
                { Answer: '5', isCorrect: false },
                { Answer: '1', isCorrect: false },
                { Answer: '10', isCorrect: true }
            ]
        }

    ]


    console.log(Questionbank);
    //creating 3 hooks for 1-currentQuestion, 2-score , 3-showScore
    const [currentQuestion, setCurrentQuestion] = useState(0); //initially it will be 0
    const [score, setScore] = useState(0); //initially it will also 0
    const [showScore, setShowScore] = useState(false);   //until user attempts all questions it will false


    //function for reset 
    const reset = () => {
        setCurrentQuestion(0);  //again settting 0 using current state
        setScore(0);
        setShowScore(false);
    }




    //function for correct answer then increase score and go to next qestion 
    const handleAnswerResponse=(isCorrect)=>{
        if(isCorrect==true){
            setScore(score+1);
        }

        const nextQuestion= currentQuestion+1;
        //we increase untill we rich last question i.e. Questionbank.length-1 and which means we attempte all question now just make showScore: true
        if(nextQuestion < Questionbank.length)
        {
            setCurrentQuestion(nextQuestion);   //then just update our cureent to next question
        }
        else{   //which means nextQuestion is greater than length i.e. his at last quesitn then make true

            setShowScore(true);
        }
    }




    return (
        <div>
            <>
                {  //here we are using ternary operator ? : 
                    //if showScore ==true then we display score and button reset
                    showScore ? (
                        <div className="answer-section">
                            your score is : {score} out of {Questionbank.length}
                            <button type="submit" onClick={reset}>Play Again</button>
                        </div>
                    ) : ( //its else part it showScore it's false i.e. then show question and opetion for it
                        <div className="showCurrentQuestionNumber">
                            <span>{currentQuestion + 1}</span> / {Questionbank.length}

                            <div className="showQuestion">
                                {Questionbank[currentQuestion].Question}
                            </div>

                            <div className="showOptionAnswer">
                                {Questionbank[currentQuestion].Answers.map((answer) => 
                                    (
                                    // <button type="submit" className="option" onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                                    <button onClick={() => handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>

                    ))}
                            </div>

                        </div>
                    )
                }
            </>
        </div>
    )

}
export default QuizGame;