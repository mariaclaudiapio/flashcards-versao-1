import FlashCard from '../components/Flashcard';
import Header from '../components/Header';
import Main from '../components/Main';

export default function FlashcardsPage() {
  return (
    <>
      <Header>React Flashcards v1</Header>
      <Main>
        <FlashCard />
      </Main>
    </>
  );
}
