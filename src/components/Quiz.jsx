import { useLayoutEffect, useState, useRef } from "react";
import "../css/Quiz.css";

export function Quiz() {
    const [quizJson, setQuizJson] = useState([]);
    const [index, setIndex] = useState(0);
    const [rightAnswer, setRightAnswer] = useState({ count: 0, turn: null });
    const [order, setOrder] = useState([0, 0, 0]);
    const progress = useRef(null);

    
//  а якщо при кліку буде зберігатись інформація про об'єкт 
//  типу який в  нас тсна відбувася
//  має бути память даних безпосердньо для кожного випадку так ти будш запам'яятовувти  де хто є 
    function makeResultAnswer() {
        if (rightAnswer.turn === null || rightAnswer.turn === false) {
            setRightAnswer(prev => ({ count: prev.count + 1, turn: true }));
        }
    
    }
    function wrongAnswer() {
        if (rightAnswer.turn === null) {
            setRightAnswer(prev => ({ count:prev.count + 0, turn: false }));
        }
    }


    function pluseIndex() {
        setOrder([
            Math.ceil(Math.random() * 10),
            Math.ceil(Math.random() * 10),
            Math.ceil(Math.random() * 10)
        ]);
        setIndex(prevIndex => {
            const newIndex = prevIndex + 1;
            if (newIndex <= 10) {
                progress.current.style.width = `${newIndex * 10}%`;
                progress.current.style.transition = "all 0.2s ease-in-out";
            } else {
                return 10;
            }
            return newIndex;
        });


        setRightAnswer(prev => ({ ...prev, turn: null }));
    }

    function minusIndex() {
        setIndex(prevIndex => {
            const newIndex = prevIndex - 1;
            if (newIndex >= 0) {
                progress.current.style.width = `${newIndex * 10}%`;
                progress.current.style.transition = "all 0.2s ease";
            } else {
                return 0;
            }
            return newIndex;
        });
    }

    useLayoutEffect(() => {
        fetch("/json/Quiz.json")
            .then(x => x.json())
            .then(x => setQuizJson(x));
    }, []);

    return (
        <>
            <div className="quizBlock">
                <div className="parent-progress">
                    <div className="progress" ref={progress}></div>
                </div>

                <div className="questionBlock">
                    {quizJson.length > 0 && index < quizJson.length ? (
                        <>
                            <h3 className="questions">{quizJson[index].question}</h3>

                            <div>
                                <p
                                    onClick={makeResultAnswer}
                                    className="answer"
                                    id={`correct${index}`}
                                    style={{ order: order[0], pointerEvents: rightAnswer.turn === null ? 'auto' : 'none' }}
                                >
                                    {quizJson[index].correct_answer}
                                </p>
                            </div>

                            <div>
                                <p
                                    onClick={wrongAnswer}
                                    className="answer"
                                    id={`wrong${index}`}
                                    style={{ order: order[1], pointerEvents: rightAnswer.turn === null ? 'auto' : 'none' }}
                                >
                                    {quizJson[index].incorrect_answer_1}
                                </p>
                            </div>

                            <div>
                                <p
                                    onClick={wrongAnswer}
                                    className="answer"
                                    id={`wrong${-index}`}
                                    style={{ order: order[2], pointerEvents: rightAnswer.turn === null ? 'auto' : 'none' }}
                                >
                                    {quizJson[index].incorrect_answer_2}
                                </p>
                            </div>
                        </>
                    ) : (
                        <h1 className="question">count of  correct answer:{rightAnswer.count}/10</h1>
                    )}
                </div>

                <div className="buttonBlock">
                    {index >= 1 ? (
                        <button className="previous" onClick={minusIndex}>
                            - Previous
                        </button>
                    ) : null}
                    <button className="Next" onClick={pluseIndex}>
                        Next ++
                    </button>
                </div>
            </div>
        </>
    );
}
