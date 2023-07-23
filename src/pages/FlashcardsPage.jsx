import FlashCard from '../components/Flashcard';
import FlashcardsContainer from '../components/FlashcardsContainer';
import Header from '../components/Header';
import Main from '../components/Main';

import { allFlashcards } from '../data/allFlashcards';

export default function FlashcardsPage() {
  return (
    <>
      <Header>React Flashcards v1</Header>
      <Main>
        <FlashcardsContainer>
          <FlashCard />
        </FlashcardsContainer>
      </Main>
    </>
  );
}
