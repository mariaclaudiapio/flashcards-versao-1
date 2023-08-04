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
  const [radioButtonShowTitle, setRadioButtonShowTitle] = useState(true);

  function handleButtonClick() {
    const shuffledCards = helperShuffleArray(allCards);

    setAllCards(shuffledCards);
  }

  function handleRadioShowTitleClick() {
    const updatedCards = [...allCards].map(card => ({
      ...card,
      showTitle: true,
    }));
    setAllCards(updatedCards);
    setRadioButtonShowTitle(true);
  }

  function handleRadioShowDescriptionClick() {
    const updatedCards = [...allCards].map(card => ({
      ...card,
      showTitle: false,
    }));
    setAllCards(updatedCards);
    setRadioButtonShowTitle(false);
  }

  function handleToggleFlashcard(cardId) {
    const updatedCards = [...allCards];
    const cardIndex = updatedCards.findIndex(card => card.id === cardId);
    updatedCards[cardIndex].showTitle = !updatedCards[cardIndex].showTitle;
    setAllCards(updatedCards);
  }

  return (
    <>
      <Header>React Flashcards v2</Header>
      <Main>
        <div className="text-center">
          <Button onButtonClick={handleButtonClick}>Embaralhar cartões</Button>
        </div>
        <div className="flex flex-row items-center justify-center space-x-4 m-4">
          <RadioButton
            id="radioButtonShowtitle"
            name="showInfo"
            buttonChecked={radioButtonShowTitle}
            onButtonClick={handleRadioShowTitleClick}
          >
            Mostrar título
          </RadioButton>
          <RadioButton
            id="radioButtonShowDescription"
            name="showInfo"
            buttonChecked={!radioButtonShowTitle}
            onButtonClick={handleRadioShowDescriptionClick}
          >
            Mostrar descrição
          </RadioButton>
        </div>
        <div className="text-center mb-4"></div>
        <FlashcardsContainer>
          {allCards.map(({ id, title, description, showTitle }) => {
            return (
              <FlashCard
                key={id}
                id={id}
                title={title}
                description={description}
                showFlashcardTitle={showTitle}
                onToggleFlashcard={handleToggleFlashcard}
              />
            );
          })}
        </FlashcardsContainer>
      </Main>
      <Footer>Desenvolvido por Maria Cláudia&copy; - 2023</Footer>
    </>
  );
}
