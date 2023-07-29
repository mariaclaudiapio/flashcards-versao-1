import { useState } from 'react';

import Button from '../components/Button';
import FlashCard from '../components/Flashcard';
import FlashcardsContainer from '../components/FlashcardsContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import RadioButton from '../components/RadioButton';

import { allFlashcards } from '../data/allFlashcards';
import { helperShuffleArray } from '../services/arrayHelpers';

export default function FlashcardsPage() {
  const [allCards, setAllCards] = useState(allFlashcards);
  const [showTitle, setShowTitle] = useState(true);

  function handleButtonClick() {
    const shuffledCards = helperShuffleArray(allCards);

    setAllCards(shuffledCards);
  }

  function handleRadioShowTitleClick() {
    setShowTitle(true);
  }

  function handleRadioShowDescriptionClick() {
    setShowTitle(false);
  }

  return (
    <>
      <Header>React Flashcards v1</Header>
      <Main>
        <div className="text-center">
          <Button onButtonClick={handleButtonClick}>Embaralhar cartões</Button>
        </div>
        <div className="flex flex-row items-center justify-center space-x-4 m-4">
          <RadioButton
            id="radioButtonShowtitle"
            name="showInfo"
            buttonChecked={showTitle}
            onButtonClick={handleRadioShowTitleClick}
          >
            Mostrar título
          </RadioButton>
          <RadioButton
            id="radioButtonShowDescription"
            name="showInfo"
            buttonChecked={!showTitle}
            onButtonClick={handleRadioShowDescriptionClick}
          >
            Mostrar descrição
          </RadioButton>
        </div>
        <div className="text-center mb-4"></div>
        <FlashcardsContainer>
          {allCards.map(({ id, title, description }) => {
            return (
              <FlashCard
                key={id}
                title={title}
                description={description}
                showFlashcardTitle={showTitle}
              />
            );
          })}
        </FlashcardsContainer>
      </Main>
      <Footer>Desenvolvido por Maria Cláudia&copy; - 2023</Footer>
    </>
  );
}

// retomar da aula 4.5
