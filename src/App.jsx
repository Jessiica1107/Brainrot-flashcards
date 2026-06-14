import './App.css';
import { useState } from 'react';
import Flashcard from './components/Flashcard';
import chimpanziniImg from './images/Chimpanzini-Bananini.webp';
import bonecaImg from './images/Boneca_Ambalabu.webp';
import trippiImg from './images/Trippi-Troppi.jpeg';
import frigoImg from './images/Frigo-Camelo.webp';
import sigmaBoyImg from './images/Sigma-Boy.jpg';
import ballerinaImg from './images/Ballerina-Cappuccina.jpeg';
import tralaleroImg from './images/tralalero-tralala.jpg';
import tungtungImg from './images/tung-tung.jpg';

function App() {
  const brainrotDeck = [
    { front: "Who is this?", back: "Chimpanzini Bananini", image: chimpanziniImg },
    { front: "Which Italian brainrot is this?", back: "Boneca Ambalabu", image: bonecaImg },
    { front: "Which Italian brainrot is this?", back: "Trippi Troppi", image: trippiImg },
    { front: "Guess this brainrot animal?", back: "Frigo Camelo", image: frigoImg },
    { front: "Who is this?", back: "Sigma Boy", image: sigmaBoyImg },
    { front: "Who dis?", back: "Ballerina Cappuccina", image: ballerinaImg },
    { front: "Who?", back: "Tralalero Tralala", image: tralaleroImg },
    { front: "Who ts?", back: "Tung Tung Tung Sahur", image: tungtungImg }
  ];

  // 2. Track which card index we are on. Start at -1 for the start screen.
  const [cardIndex, setCardIndex] = useState(0);

  const handleNextCard = () => {
    let randomIndex = cardIndex;

    while (randomIndex === cardIndex) {
      randomIndex = Math.floor(Math.random() * brainrotDeck.length);
    }
    setCardIndex(randomIndex);
  };

  return (
    <div className="App">
      <h1> Test your brainrot knowledge</h1>
      <h2> See how many Italian brainrot characters you can name!</h2>
      <h3> Number of cards: {brainrotDeck.length} </h3>

      <div className="card-container">
        {cardIndex === -1 ? (
          <div className="start-screen-box">
            <h3>Start!</h3>
          </div>
        ) : (
          /* else display the single current Flashcard component */
          <Flashcard
            key={cardIndex} // Force React to reset the card's flip state when shifting indexes
            frontSide={brainrotDeck[cardIndex].front}
            backSide={brainrotDeck[cardIndex].back}
            imageSrc={brainrotDeck[cardIndex].image}
          />
        )}
        <button className="button" onClick={handleNextCard}> → </button>
      </div>
    </div>
  );
}

export default App;
