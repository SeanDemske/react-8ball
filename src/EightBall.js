import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
    const DEFAULT_TEXT = "Think of a question"
    const DEFAULT_COLOR = "black";

    const [color, setColor] = useState(DEFAULT_COLOR);
    const [text, setText] = useState(DEFAULT_TEXT);
    const [questionsAsked, setQuestionsAsked] = useState(0);

    const handleClick = () => {
        const idx = Math.floor(Math.random() * answers.length);
        const randomAnswer = answers[idx];
        setColor(randomAnswer.color);
        setText(randomAnswer.msg);
        setQuestionsAsked(questionsAsked + 1);
    }

    const handleReset = () => {
        setColor(DEFAULT_COLOR);
        setText(DEFAULT_TEXT);
        setQuestionsAsked(0);
    }

    return (
        <>
            <div className="EightBall" onClick={ handleClick } style={{ backgroundColor: color }}>
                <h1>{ text }</h1>
            </div>
            <h1>Questions Asked: { questionsAsked }</h1>
            <button onClick={ handleReset }>Reset</button>
        </>
    )
}

export default EightBall;