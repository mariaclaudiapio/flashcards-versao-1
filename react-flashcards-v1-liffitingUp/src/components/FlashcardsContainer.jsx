export default function FlashcardsContainer({ children: flashcards }) {
  return (
    <div
      className={` p-4 flex flex-row rounded-lg
  items-center justify-center flex-wrap bg-gray-100`}
    >
      {flashcards}
    </div>
  );
}
