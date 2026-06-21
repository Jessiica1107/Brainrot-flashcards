import React, { useState } from 'react';
import './Flashcard.css';

export default function Flashcard({ frontSide, backSide, imageSrc }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };
    const [val, setVal] = useState('Enter your answer ... ');

    function handleChange(e) {
        setVal(e.target.value);
    }

    const [feedback, setFeedback] = useState('none');

    function handleSubmit(e) {
        e.preventDefault();
        const userGuess = val.trim().toLowerCase();
        const correctAnswer = backSide.trim().toLowerCase();

        if (userGuess === correctAnswer) {
            setFeedback('correct');
        } else {
            setFeedback('incorrect');
        }
        alert("You guessed " + val);
    }

    return (
        <div className="flashcard-container">
            <div className={`card-box ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>

                {/* Front Side*/}
                <div className="card-face card-front">
                    <span className="badge">QUESTION</span>
                    {imageSrc && <img src={imageSrc} alt="Brainrot clue" className="card-image" />}
                    <p>{frontSide}</p>
                </div>

                <div className="card-face card-back">
                    <span className="badge">ANSWER</span>
                    <p>{backSide}</p>
                </div>

            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="guess-input"> Guess the answer: </label>
                    <input id="guess-input" type="text" value={val} onChange={handleChange} />
                    <button type="submit"> Submit</button>
                </form>
            </div>
            {feedback === 'correct' && <p className="feedback-text correct-text">Correct! </p>}
            {feedback === 'incorrect' && <p className="feedback-text incorrect-text">Incorrect, try again! </p>}
        </div>

    );
}