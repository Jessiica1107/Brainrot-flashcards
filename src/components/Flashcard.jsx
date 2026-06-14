import React, { useState } from 'react';
import './Flashcard.css';

export default function Flashcard({ frontSide, backSide, imageSrc }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
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
    );
}