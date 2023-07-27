import { useState } from 'react';

import Button from '../components/Button';
import FlashCard from '../components/Flashcard';
import FlashcardsContainer from '../components/FlashcardsContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';

import { allFlashcards } from '../data/allFlashcards';
import { helperShuffleArray } from '../services/arrayHelpers';

export default function FlashcardsPage() {
  const [allCards, setAllCards] = useState(allFlashcards);

  function handleButtonClick() {
    const shuffledCards = helperShuffleArray(allCards);

    setAllCards(shuffledCards);
  }

  return (
    <>
      <Header>React Flashcards v1</Header>
      <Main>
        <div className="text-center">
          <Button onButtonClick={handleButtonClick}>Embaralhar cartões</Button>
        </div>
        <div className="text-center mb-4"></div>
        <FlashcardsContainer>
          {allCards.map(({ id, title, description }) => {
            return (
              <FlashCard key={id} title={title} description={description} />
            );
          })}
        </FlashcardsContainer>
      </Main>
      <Footer>Desenvolvido por Maria Cláudia&copy; - 2023</Footer>
    </>
  );
}

// retomar da aula 4.5
